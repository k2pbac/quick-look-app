import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsHomeComponent } from './products/products-home/products-home.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [
  { path: '', component: ProductsHomeComponent },
  { path: 'category/bread', component: ProductsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
