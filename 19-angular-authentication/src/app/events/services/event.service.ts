import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IEvent} from '../models/IEvent';
import {retry} from 'rxjs/operators';
import {Result} from '../models/Result';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient:HttpClient) { }

  // Get all free events
  public getFreeEvents():Observable<IEvent[]>{
    let dataURL:string = 'http://127.0.0.1:5000/events/free';
    return this.httpClient.get<IEvent[]>(dataURL).pipe(
      retry(1)
    )
  }

  // Get all Pro events
  public getProEvents():Observable<IEvent[]>{
    let dataURL:string = 'http://127.0.0.1:5000/events/pro';
    return this.httpClient.get<IEvent[]>(dataURL).pipe(
      retry(1)
    )
  }

  // upload event
  public uploadEvent(event):Observable<Result>{
    let dataURL:string = 'http://127.0.0.1:5000/events/upload';
    return this.httpClient.post<Result>(dataURL , event).pipe(
      retry(1)
    )
  }
}
