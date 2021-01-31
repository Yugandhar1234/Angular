import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  // addProduct
  public addProduct(product):Observable<Product>{
    let dataURL:string = `http://127.0.0.1:5000/api/products/`;
   return this.httpClient.post<Product>(dataURL, product).pipe(
      retry(1)
    );
  }


  // get All Products
  public getAllProducts():Observable<Product[]>{
    let dataURL:string = 'http://127.0.0.1:5000/api/products';
    return this.httpClient.get<Product[]>(dataURL).pipe(
      retry(1)
    )
  }

  // get a single Product
  public getProduct(productId):Observable<Product>{
    let dataURL:string = `http://127.0.0.1:5000/api/products/${productId}`;
    return this.httpClient.get<Product>(dataURL).pipe(
      retry(1)
    )
  }

  // update Product
  public updateProduct(productId,product):Observable<Product>{
    let dataURL:string = `http://127.0.0.1:5000/api/products/${productId}`;
    return this.httpClient.put<Product>(dataURL,product).pipe(
      retry(1)
    )
  }

  // delete Product
  public deleteProduct(productId):Observable<Product>{
    let dataURL:string = `http://127.0.0.1:5000/api/products/${productId}`;
    return this.httpClient.delete<Product>(dataURL).pipe(
      retry(1)
    )
  }
}
