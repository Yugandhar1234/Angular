import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  public productId:string;
  public selectedProduct:Product;
  public errorMessage:string;
  public imageFileName:string;
  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductService,
              private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap) => {
      this.productId = param.get('id');
    });
    this.productService.getProduct(this.productId).subscribe((data) => {
      this.selectedProduct = data;
      this.imageFileName = data.image;
    } , (err) => {
      this.errorMessage = err;
    });
  }

  public onChangeImage(event){
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        if(reader.result){
          this.imageFileName = String(reader.result);
          this.selectedProduct.image = String(reader.result)
        }
      });
    }
  }

  //submitUpdateProduct
  public submitUpdateProduct(){
    this.productService.updateProduct(this.productId, this.selectedProduct).subscribe((data) => {
      this.router.navigate(['/products/list-products']);
    }, (err) => {
      console.error(err);
    });
  }
}
