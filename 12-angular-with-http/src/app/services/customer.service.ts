import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ICustomer} from '../components/customers/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  // get all Customers
  public getAllCustomers():Observable<ICustomer[]>{
      let dataURL:string = `https://gist.githubusercontent.com/thenaveensaggam/0219916b2f5ee2c9f05338d23be0dfbe/raw/3cecec8b02358a55a59131342088fdd480926b46/06082020.json`;
      return this.httpClient.get<ICustomer[]>(dataURL).pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  public handleError(error:HttpErrorResponse){
    let errorMessage:string = "";

    if(error.error instanceof ErrorEvent){
      // client side error
      errorMessage = error.error.message;
    }
    else{
      // server error
      errorMessage = `Status : ${error.status}  MESSAGE : ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
