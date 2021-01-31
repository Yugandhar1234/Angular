import { Component, OnInit } from '@angular/core';
import {IEvent} from '../../models/IEvent';
import {EventService} from '../../services/event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload-events',
  templateUrl: './upload-events.component.html',
  styleUrls: ['./upload-events.component.css']
})
export class UploadEventsComponent implements OnInit {

  public isFree:boolean;
  public event:IEvent = {
    name : '',
    image : '',
    price : null,
    type : '',
    info : '',
    date : ''
  };
  public errorMessage:string;
  constructor(private eventService:EventService,
              private router:Router) { }

  ngOnInit(): void {
  }

  //selectEventType
  public selectEventType(event){
    this.isFree = (event.target.value === 'FREE');
  }

  // submitUpload
  public submitUpload(){
    this.eventService.uploadEvent(this.event).subscribe((data) => {
      if(this.event.type === 'FREE'){
        this.router.navigate(['/events/free']);
      }
      if(this.event.type === 'PRO'){
        this.router.navigate(['/events/pro']);
      }
    } , (err) => {
      this.errorMessage = err;
    });
  }

}
