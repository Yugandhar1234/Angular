import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {ICustomer} from '../models/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  // get all customers
  public getAllCustomers():Observable<ICustomer[]>{
    let dataURL:string = `https://gist.githubusercontent.com/thenaveensaggam/524998af81a25426246101f9f0410f5f/raw/cfd433b4e46ef7a3fd860132f2ea5ef6bc5af0f3/customers-15082020.json`;
    return this.httpClient.get<ICustomer[]>(dataURL).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }

  public handleErrors(error:HttpErrorResponse){
    let errorMessage:string;
    if(error.error instanceof ErrorEvent){
      // client side error
      errorMessage = `MESSAGE : ${error.error.message}`;
    }
    else{
      // server side error
      errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
