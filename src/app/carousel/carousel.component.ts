import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../products/product.service';
import { Product } from '../products/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselMultilist implements OnInit, OnDestroy {
  isLoading = false;
  showIndicators = false;
  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;
  slidesChangeMessage = '';
  favorites: Product[] = [];
  private favoritesSub: Subscription = new Subscription();

  constructor(public favoritesService: ProductsService) {}

  ngOnInit() {
    this.favoritesService.getFavorites();

    this.isLoading = true;
    this.favoritesSub = this.favoritesService
      .getProductUpdateListener()
      .subscribe((productsData: { products: Product[]; count: number }) => {
        this.isLoading = false;
        this.favorites = productsData.products;
      });
  }

  ngOnDestroy() {
    this.favoritesSub.unsubscribe();
  }
}
