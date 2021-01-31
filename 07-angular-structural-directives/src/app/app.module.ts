import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { HobbiesSelectComponent } from './components/hobbies-select/hobbies-select.component';
import { HobbiesSwitchComponent } from './components/hobbies-switch/hobbies-switch.component';
import { EmployeesComponent } from './components/employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    HobbiesSelectComponent,
    HobbiesSwitchComponent,
    EmployeesComponent
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
