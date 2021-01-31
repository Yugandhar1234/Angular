import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/Product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public products:Product[] = [];
  public errorMessage:string;
  constructor(private productService : ProductService,
              private router:Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data
    }, (err) => {
      this.errorMessage = err;
    });
  }

  //clickDeleteProduct
  public clickDeleteProduct(productId){
    this.productService.deleteProduct(productId).subscribe((data) => {
      // reload the same component
      this.router.navigateByUrl('/products', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/products/list-products']).then(r => {});
      });
    });
  }

}
