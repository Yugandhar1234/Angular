import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.css']
})
export class PropBindingComponent implements OnInit {

  public imageOne = '../../../assets/images/card_1.jpg';
  public imageTwo = '../../../assets/images/card_2.jpg';
  public imageThree = '../../../assets/images/card_3.jpg';
  public imageFour = '../../../assets/images/card_4.jpg';
  public countries:string[] = ['Paris' , 'Bangkok' , 'Indonesia' , 'Malaysia'];
  public buttonClass:string = "btn-warning";

  constructor() { }

  ngOnInit(): void {
  }

}
