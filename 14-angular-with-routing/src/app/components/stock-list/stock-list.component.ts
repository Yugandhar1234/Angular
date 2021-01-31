import { Component, OnInit } from '@angular/core';
import {StockService} from '../../services/stock.service';
import {IStock} from '../../models/IStock';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public stocks:IStock[];
  public errorMessage:string;
  constructor(private stockService:StockService,
              private ngxSpinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.ngxSpinner.show();
    this.stockService.getAllStocks().subscribe((data) => {
      this.stocks = data;
      this.ngxSpinner.hide();
    } , (err) => {
      this.errorMessage = err;
    });
  }

}
