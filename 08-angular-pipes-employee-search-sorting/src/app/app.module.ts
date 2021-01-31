import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { SortPipe } from './pipes/sort.pipe';
import { AngularPipesComponent } from './components/angular-pipes/angular-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SortPipe,
    AngularPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
