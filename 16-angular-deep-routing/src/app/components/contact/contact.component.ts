import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public user:any = {
    username : '',
    email : '',
    mobile : '',
    message : ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  public contactUs(){
    console.log(this.user);
  }

}
