import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../services/customer.service';
import {ICustomer} from '../ICustomer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public customers:ICustomer[];
  public errorMessage:string;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((data) => {
      this.customers = data;
    } , (err) => {
      this.errorMessage = err;
    });
  }

}
