import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public customers:any[] = [];

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }

}
