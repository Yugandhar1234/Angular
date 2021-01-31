import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies-switch',
  templateUrl: './hobbies-switch.component.html',
  styleUrls: ['./hobbies-switch.component.css']
})
export class HobbiesSwitchComponent implements OnInit {

  public hobby:string = null;

  constructor() { }

  ngOnInit(): void {
  }

}
