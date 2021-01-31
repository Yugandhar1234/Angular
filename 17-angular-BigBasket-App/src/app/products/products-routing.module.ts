import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import {ListProductComponent} from './components/list-product/list-product.component';
import {AddProductComponent} from './components/add-product/add-product.component';
import {UpdateProductComponent} from './components/update-product/update-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'list-products' , component : ListProductComponent},
  { path : 'add-product' , component : AddProductComponent},
  { path : 'update/:id' , component : UpdateProductComponent}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
