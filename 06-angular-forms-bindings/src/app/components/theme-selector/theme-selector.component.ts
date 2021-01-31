import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.css']
})
export class ThemeSelectorComponent implements OnInit {

  public darkTheme:boolean = false;
  public imageOne:string = '../../../assets/images/card_1.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
