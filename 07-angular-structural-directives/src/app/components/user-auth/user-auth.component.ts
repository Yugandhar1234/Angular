import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  public isLoggedIn:boolean = null;
  public firstLoad:boolean = true;

  public login(){
    this.isLoggedIn = true;
    this.firstLoad = false;
  }

  public logOut(){
    this.isLoggedIn = false;
    this.firstLoad = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
