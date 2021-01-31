import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../../models/IEmployee';
import {EmployeeService} from '../../services/employee.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees:IEmployee[];
  public errorMessage:string;
  constructor(private employeeService:EmployeeService,
              private ngxSpinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.ngxSpinner.show();
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.employees = data;
      this.ngxSpinner.hide();
    } , (err) => {
      this.errorMessage = err;
    });
  }

}
