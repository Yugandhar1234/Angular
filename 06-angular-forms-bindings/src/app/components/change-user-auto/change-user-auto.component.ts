import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-user-auto',
  templateUrl: './change-user-auto.component.html',
  styleUrls: ['./change-user-auto.component.css']
})
export class ChangeUserAutoComponent implements OnInit {

  public username:string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
