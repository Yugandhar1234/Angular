import { Component, OnInit } from '@angular/core';
import {Employee} from './Employee';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees:Employee[] = [
    {
      name : 'John',
      age : 40,
      designation : 'Manager',
      isActive : true
    },
    {
      name : 'Wilson',
      age : 45,
      designation : 'Sr.Manager',
      isActive : false
    },
    {
      name : 'Rajan',
      age : 25,
      designation : 'Software Engineer',
      isActive : true
    },
    {
      name : 'Laura',
      age : 28,
      designation : 'Tech Lead',
      isActive : false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
