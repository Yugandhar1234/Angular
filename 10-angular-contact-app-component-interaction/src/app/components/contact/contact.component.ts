import { Component, OnInit } from '@angular/core';
import {ContactStore} from '../contact-store/ContactStore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contacts:any[];
  public selectedContact:any;

  constructor() {
    let contactStore = new ContactStore();
    this.contacts = contactStore.fetchContacts();
  }

  ngOnInit(): void {
  }

}
