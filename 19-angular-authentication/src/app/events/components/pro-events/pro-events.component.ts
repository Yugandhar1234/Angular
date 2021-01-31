import { Component, OnInit } from '@angular/core';
import {IEvent} from '../../models/IEvent';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-pro-events',
  templateUrl: './pro-events.component.html',
  styleUrls: ['./pro-events.component.css']
})
export class ProEventsComponent implements OnInit {

  public events:IEvent[] = [];
  public errorMessage:string;
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.eventService.getProEvents().subscribe((data) => {
      this.events = data;
    } , (err) => {
      this.errorMessage = err;
    });
  }

}
