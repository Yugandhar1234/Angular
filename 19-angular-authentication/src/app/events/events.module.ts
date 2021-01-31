import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { FreeEventsComponent } from './components/free-events/free-events.component';
import { ProEventsComponent } from './components/pro-events/pro-events.component';
import { UploadEventsComponent } from './components/upload-events/upload-events.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EventsComponent, FreeEventsComponent, ProEventsComponent, UploadEventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EventsModule { }
