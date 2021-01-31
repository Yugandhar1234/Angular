import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeUsernameComponent } from './components/change-username/change-username.component';
import { ChangeUserAutoComponent } from './components/change-user-auto/change-user-auto.component';
import {FormsModule} from '@angular/forms';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SmsAppComponent } from './components/sms-app/sms-app.component';
import { AmountRangeComponent } from './components/amount-range/amount-range.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeUsernameComponent,
    ChangeUserAutoComponent,
    ChangePasswordComponent,
    SmsAppComponent,
    AmountRangeComponent,
    ThemeSelectorComponent,
    RegisterComponent
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
