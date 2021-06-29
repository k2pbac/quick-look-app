import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from '../product.model';
import { ProductsService } from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  private productSub: Subscription = new Subscription();
  isLoading = false;

  constructor(public productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts();
    this.isLoading = true;
    this.productSub = this.productsService
      .getPostUpdateListener()
      .subscribe((products: Product[]) => {
        this.isLoading = false;
        this.products = products;
      });
  }

  ngOnDestroy() {
    this.productSub.unsubscribe();
  }
}
