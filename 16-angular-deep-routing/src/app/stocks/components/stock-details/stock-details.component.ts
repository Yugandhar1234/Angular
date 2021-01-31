import { Component, OnInit } from '@angular/core';
import {IStock} from '../../models/IStock';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StockService} from '../../services/stock.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  public stockId:number;
  public selectedStock:IStock;
  public errorMessage:string;
  constructor(private activatedRoute:ActivatedRoute,
              private stockService:StockService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap) => {
      this.stockId = Number(param.get('id'));
    });

    this.stockService.getAllStocks().subscribe((data) => {
      this.selectedStock = data.find((stock) => {
        return stock.id === this.stockId;
      });
    } , (err) => {
      this.errorMessage = err;
    });
  }

}
