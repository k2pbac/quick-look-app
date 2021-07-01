import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Category } from './category.model';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private categories: Category[] = [];
  private categoryUpdated = new Subject<Category[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getCategories() {
    this.http
      .get<{ message: string; categories: any }>(
        'http://localhost:3000/categories'
      )
      .pipe(
        map((categoryData) => {
          return categoryData.categories.map(
            (category: { categoryName: any; _id: any; imagePath: any }) => {
              return {
                categoryName: category.categoryName,
                id: category._id,
                imagePath: category.imagePath,
              };
            }
          );
        })
      )
      .subscribe((transformedCategories) => {
        this.categories = transformedCategories;
        this.categoryUpdated.next([...this.categories]);
      });
  }

  getCategoryUpdateListener() {
    return this.categoryUpdated.asObservable();
  }
}
