import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount-range',
  templateUrl: './amount-range.component.html',
  styleUrls: ['./amount-range.component.css']
})
export class AmountRangeComponent implements OnInit {

  public amount:number = 5000;
  constructor() { }

  ngOnInit(): void {
  }

}
