import { Component } from '@angular/core';

@Component({
  selector: 'demo-carousel-multilist',
  templateUrl: './multilist.html',
})
export class DemoCarouselMultilistComponent {
  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;

  slidesChangeMessage = '';

  slides = [
    { image: 'assets/images/QuickLook2.png' },
    { image: 'assets/images/nature/2.jpg' },
    { image: 'assets/images/nature/3.jpg' },
    { image: 'assets/images/nature/4.jpg' },
  ];

  onSlideRangeChange(indexes: number[] | void): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
}
