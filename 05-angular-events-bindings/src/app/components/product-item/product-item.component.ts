import { Component, OnInit } from '@angular/core';
import {Product} from './Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public productItem:Product = {
    sno : 101,
    name : 'Samsung Watch',
    price : 450,
    qty : 2
  };


  public incrQty():void{
    this.productItem.qty = this.productItem.qty + 1;
  }

  public decrQty():void{
    this.productItem.qty = (this.productItem.qty - 1 > 0)? this.productItem.qty - 1 : 1;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
