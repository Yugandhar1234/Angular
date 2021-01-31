import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {IStock} from '../models/IStock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient:HttpClient) { }

  // get all stocks
  public getAllStocks():Observable<IStock[]>{
    let dataURL:string = `https://gist.githubusercontent.com/thenaveensaggam/186a2718c01a49d477d681efb74e955c/raw/e03b37aef7faef739b3b6e1739c286326b33e057/stocks-10082020.json`;
    return this.httpClient.get<IStock[]>(dataURL).pipe(
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
