import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {StockListComponent} from './components/stock-list/stock-list.component';
import {AboutComponent} from './components/about/about.component';
import {EmployeeDetailsComponent} from './components/employee-details/employee-details.component';
import {StockDetailsComponent} from './components/stock-details/stock-details.component';

const routes: Routes = [
  // all routing info
  { path : '' , component : HomeComponent },
  { path : 'employees' , component : EmployeeListComponent },
  { path : 'employees/:id' , component : EmployeeDetailsComponent },
  { path : 'stocks' , component : StockListComponent },
  { path : 'stocks/:id' , component : StockDetailsComponent },
  { path : 'about' , component : AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
