import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../../models/ICustomer';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CustomerService} from '../../services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customerId:string;
  public selectedCustomer:ICustomer;
  public errorMessage:string;
  constructor(private activatedRoute:ActivatedRoute,
              private customerService:CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap) => {
      this.customerId = param.get('id');
    });

    this.customerService.getAllCustomers().subscribe((data) => {
      this.selectedCustomer = data.find((customer) => {
        return customer.login.uuid === this.customerId;
      });
    } , (err) => {
        this.errorMessage = err;
    });
  }

}
