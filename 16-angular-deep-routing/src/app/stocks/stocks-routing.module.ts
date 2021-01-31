import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StocksComponent } from './stocks.component';
import {StockDetailsComponent} from './components/stock-details/stock-details.component';

const routes: Routes = [
  { path: '', component: StocksComponent },
  { path : ':id', component : StockDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
