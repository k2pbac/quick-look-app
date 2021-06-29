import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Product[] = [];
  private productsUpdated = new Subject<Product[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getProducts() {
    this.http
      .get<{ message: string; products: any }>('http://localhost:3000/')
      .pipe(
        map((productData) => {
          return productData.products.map(
            (product: {
              productName: any;
              description: any;
              _id: any;
              imagePath: any;
            }) => {
              return {
                productName: product.productName,
                description: product.description,
                id: product._id,
                imagePath: product.imagePath,
              };
            }
          );
        })
      )
      .subscribe((transformedProducts) => {
        this.products = transformedProducts;
        this.productsUpdated.next([...this.products]);
      });
  }

  getPostUpdateListener() {
    return this.productsUpdated.asObservable();
  }

  getProduct(id: string) {
    return this.http.get<{
      _id: string;
      productName: string;
      description: string;
      imagePath: string;
    }>('http://localhost:3000/' + id);
  }
}
