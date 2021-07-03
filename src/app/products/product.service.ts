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

  getFavorites() {
    this.http
      .get<{ message: string; products: any }>('http://localhost:3000/')
      .pipe(
        map((productData) => {
          return {
            products: productData.products.map(
              (product: {
                productName: any;
                description: any;
                _id: any;
                imagePath: any;
                likes: number;
              }) => {
                return {
                  productName: product.productName,
                  description: product.description,
                  id: product._id,
                  imagePath: product.imagePath,
                  likes: product.likes,
                };
              }
            ),
          };
        })
      )
      .subscribe((transformedProductData) => {
        this.products = transformedProductData.products;
        this.productsUpdated.next({
          products: [...this.products],
          count: 0,
        });
      });
  }

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
                likes: number;
              }) => {
                return {
                  productName: product.productName,
                  description: product.description,
                  id: product._id,
                  imagePath: product.imagePath,
                  likes: product.likes,
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
