import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

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
  categoryName: string;
  totalProducts = 0;
  itemsPerPage = 3;
  currentPage = 1;
  page: number;

  constructor(
    public productsService: ProductsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('categoryName')) {
        this.categoryName = paramMap.get('categoryName') || '';
        this.productsService.getProducts(
          this.categoryName,
          this.currentPage,
          this.itemsPerPage
        );
        this.isLoading = true;
        this.productSub = this.productsService
          .getProductUpdateListener()
          .subscribe((productsData: { products: Product[]; count: number }) => {
            this.isLoading = false;
            this.products = productsData.products;
            this.totalProducts = productsData.count;
          });
      } else {
        this.categoryName = null;
      }
    });
  }

  pageChanged(event: PageChangedEvent) {
    this.page = event.page;
    this.productsService.getProducts(
      this.categoryName,
      this.page,
      this.itemsPerPage
    );
  }

  ngOnDestroy() {
    this.productSub.unsubscribe();
  }
}
