import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage:string;
  public childWishMessage:string;
  @Output() sendData = new EventEmitter();

  public onInput(){
    this.sendData.emit(this.childWishMessage);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
