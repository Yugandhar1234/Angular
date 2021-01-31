import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts:any;
  @Output() sendData = new EventEmitter();

  // when we click on each row
  public clickContact(contact){
    this.sendData.emit(contact); //send data to the parent
  }
  constructor() { }

  ngOnInit(): void {
  }

}
