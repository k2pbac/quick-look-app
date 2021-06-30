import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from '../product.model';
import { ProductsService } from '../product.service';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css'],
})
export class ProductsHomeComponent implements OnInit {
  constructor(public productsService: ProductsService) {}

  products: Product[] = [];
  private productSub: Subscription = new Subscription();
  isLoading = false;

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
