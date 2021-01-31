import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() childEmployee:any;

  public message:string = "Good Morning from Child";

  @Output() public sendData = new EventEmitter();

  public sendToParent(){
    this.sendData.emit(this.message);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
