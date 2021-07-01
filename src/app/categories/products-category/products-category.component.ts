import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Category } from '../category.model';
import { CategoriesService } from '../category.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css'],
})
export class ProductsCategoryComponent implements OnInit, OnDestroy {
  constructor(public categoryService: CategoriesService) {}

  categories: Category[] = [];
  private categorySub: Subscription = new Subscription();
  isLoading = false;

  ngOnInit(): void {
    this.categoryService.getCategories();
    this.isLoading = true;
    this.categorySub = this.categoryService
      .getCategoryUpdateListener()
      .subscribe((categories: Category[]) => {
        this.isLoading = false;
        this.categories = categories;
        this.categories.sort((a, b) =>
          a.categoryName.localeCompare(b.categoryName)
        );
      });
  }
  ngOnDestroy() {
    this.categorySub.unsubscribe();
  }
}
