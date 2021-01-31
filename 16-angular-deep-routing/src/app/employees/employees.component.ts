import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './services/employee.service';
import {IEmployee} from './models/IEmployee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees:IEmployee[];
  public errorMessage:string;
  public selectedEmployee:IEmployee;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((data) => {
      this.employees = data;
    } , (err) => {
      this.errorMessage = err;
    });
  }

}
