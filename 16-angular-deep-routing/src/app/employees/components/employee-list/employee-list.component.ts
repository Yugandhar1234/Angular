import {Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import {IEmployee} from '../../models/IEmployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() employees:IEmployee[];
  @Output() sendData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public clickEmployee(employee){
    this.sendData.emit(employee);
  }

}
