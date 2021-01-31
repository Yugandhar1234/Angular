import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../customers/ICustomer';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

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
