import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  // Enrollment
  public enroll(user):Observable<any>{
    let dataURL = 'http://127.0.0.1:5000/user/enroll';
    return this.httpClient.post<any>(dataURL , user).pipe(
      retry(1)
    )
  }

  // Register
  public register(user):Observable<any>{
    let dataURL = 'http://127.0.0.1:5000/user/register';
    return this.httpClient.post<any>(dataURL , user).pipe(
      retry(1)
    )
  }
}
