import { Component, OnInit } from '@angular/core';
import {IStock} from './models/IStock';
import {StockService} from './services/stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  public stocks:IStock[];
  public errorMessage:string;

  constructor(private stockService:StockService) { }

  ngOnInit(): void {
    this.stockService.getAllStocks().subscribe((data) => {
      this.stocks = data;
    } , (err) => {
      this.errorMessage = err;
    });
  }

}
