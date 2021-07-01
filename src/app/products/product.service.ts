import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Product[] = [];
  private productsUpdated = new Subject<{
    products: Product[];
    count: number;
  }>();
  constructor(private http: HttpClient, private router: Router) {}

  getProducts(name: string, currentPage: number, itemsPerPage: number) {
    this.http
      .get<{ message: string; products: any; count: number }>(
        'http://localhost:3000/categories/' +
          name +
          '?pagesize=' +
          itemsPerPage +
          '&currentpage=' +
          currentPage
      )
      .pipe(
        map((productData) => {
          return {
            products: productData.products.map(
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
            ),
            count: productData.count,
          };
        })
      )
      .subscribe((transformedProductData) => {
        this.products = transformedProductData.products;
        this.productsUpdated.next({
          products: [...this.products],
          count: transformedProductData.count,
        });
      });
  }

  getProductUpdateListener() {
    return this.productsUpdated.asObservable();
  }
}
