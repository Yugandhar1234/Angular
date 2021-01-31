import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public imageOne:string = "../../../assets/images/card_1.jpg";
  public imageTwo:string = "../../../assets/images/card_2.jpg";
  public imageThree:string = "../../../assets/images/card_3.jpg";
  public imageFour:string = "../../../assets/images/card_4.jpg";

  public countries:string[] = ['Paris' , 'Bangkok', 'Indonesia' , 'Malaysia'];
  constructor() { }

  ngOnInit(): void {
  }

}
