import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../models/IUser';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserResult} from '../models/UserResult';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient,
              private router:Router) { }

  // login
  public login(user:IUser):Observable<UserResult>{
    let dataURL:string = `http://127.0.0.1:5000/users/login`;
    return this.httpClient.post<UserResult>(dataURL, user).pipe(
      retry(1)
    )
  }

  // register
  public register(user:IUser):Observable<UserResult>{
    let dataURL:string = `http://127.0.0.1:5000/users/register`;
    return this.httpClient.post<UserResult>(dataURL, user).pipe(
      retry(1)
    )
  }

  // isLoggedIn
  public isLoggedIn(){
    /*if(localStorage.getItem('token')){
      return true;
    }
    else{
      return  false;
    }*/
    return !!localStorage.getItem('token');
  }

  // logout
  public logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  // getToken
  public getToken(){
    return localStorage.getItem('token');
  }
}
