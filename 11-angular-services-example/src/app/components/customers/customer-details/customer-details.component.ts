import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customers:any[] = [];

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }

}
