import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../../models/IEmployee';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {EmployeeService} from '../../services/employee.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeID:number;
  public selectedEmployee:IEmployee;
  public errorMessage:string;
  constructor(private activatedRoute:ActivatedRoute,
              private employeeService:EmployeeService,
              private ngxSpinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.ngxSpinner.show();
    this.activatedRoute.paramMap.subscribe((param:ParamMap) => {
      this.employeeID = Number(param.get('id'));
    });

    this.employeeService.getAllEmployees().subscribe((data) => {
      this.selectedEmployee = data.find((employee) => {
        this.ngxSpinner.hide();
        return employee.id === this.employeeID;
      });
    } , (err) => {
      this.errorMessage = err;
    });

  }

}
