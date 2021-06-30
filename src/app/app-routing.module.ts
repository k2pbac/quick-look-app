import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsCategoryComponent } from './products/products-category/products-category.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [
  { path: '', component: ProductsCategoryComponent },
  { path: 'category/bread', component: ProductsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
