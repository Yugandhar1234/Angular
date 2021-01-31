import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public product:Product = {
    _id : '',
    name : '',
    image : '',
    price : null,
    qty : null,
    info : ''
  };
  public imageFileName:any;
  public result:HTMLInputElement;
  constructor(private productService:ProductService,
              private router:Router) { }

  ngOnInit(): void {
  }

  public async onChangeImage(event){
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      this.imageFileName = file;
      reader.addEventListener('load', () => {
        return reader.result ? this.product.image = String(reader.result) : '';
      });
    }
  }


  public submitAddProduct(){
   this.productService.addProduct(this.product).subscribe((data) => {
     this.router.navigate(['/products/list-products']);
   }, (err) => {
     console.error(err);
   });
  }

}
