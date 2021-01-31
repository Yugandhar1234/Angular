import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies-select',
  templateUrl: './hobbies-select.component.html',
  styleUrls: ['./hobbies-select.component.css']
})
export class HobbiesSelectComponent implements OnInit {

  public eating:boolean;
  public coding:boolean;
  public sleeping:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
