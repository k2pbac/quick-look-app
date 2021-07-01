import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsCategoryComponent } from './categories/products-category/products-category.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [
  { path: 'categories', component: ProductsCategoryComponent },
  { path: '', component: ProductsCategoryComponent },
  { path: 'categories/:categoryName', component: ProductsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
