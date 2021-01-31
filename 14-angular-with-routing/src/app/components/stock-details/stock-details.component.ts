import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StockService} from '../../services/stock.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {IStock} from '../../models/IStock';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  public stockID:number;
  public selectedStock:IStock;
  public errorMessage:string;
  constructor(private activatedRoute:ActivatedRoute,
              private stockService:StockService,
              private ngxSpinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.ngxSpinner.show();
    this.activatedRoute.paramMap.subscribe((param:ParamMap) => {
      this.stockID = Number(param.get('id'));
    });

    this.stockService.getAllStocks().subscribe((data) => {
      this.selectedStock = data.find((stock) => {
        this.ngxSpinner.hide();
        return stock.id === this.stockID;
      });
    } , (err) => {
      this.errorMessage = err;
    });
  }

}
