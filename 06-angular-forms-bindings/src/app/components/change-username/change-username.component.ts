import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.css']
})
export class ChangeUsernameComponent implements OnInit {

  public username:string = "";

  public updateUser(value){
      this.username = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
