import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {IEmployee} from '../models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  // get all employees
  public getAllEmployees():Observable<IEmployee[]>{
    let dataURL:string = `https://gist.githubusercontent.com/thenaveensaggam/64e0ba47b0de74edb524162f5185957d/raw/2ff79c6758251e3c0118543a928fc806016f0db0/employees-10082020.json`;
    return this.httpClient.get<IEmployee[]>(dataURL).pipe(
      retry(1),
      catchError(this.handleErrors)
    )
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
