import { Component, OnInit } from '@angular/core';
import {User} from './User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user:User = {
    username : '',
    email : '',
    password : ''
  };

  public submitUser(){
    console.log(this.user);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
