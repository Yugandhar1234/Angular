import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import {FreeEventsComponent} from './components/free-events/free-events.component';
import {ProEventsComponent} from './components/pro-events/pro-events.component';
import {UploadEventsComponent} from './components/upload-events/upload-events.component';
import {AuthGuard} from '../guards/auth.guard';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'free', component: FreeEventsComponent },
  { path: 'pro', component: ProEventsComponent , canActivate : [AuthGuard] },
  { path: 'upload', component: UploadEventsComponent, canActivate : [AuthGuard] }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
