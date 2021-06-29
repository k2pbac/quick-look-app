import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],
})
export class MainSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cards = [
    {
      text: 'Photo of a cat',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      text: 'Photo of a cat',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      text: 'Photo of a cat',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      text: 'Photo of a cat',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      text: 'Photo of a cat',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      text: 'Photo of a cat',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
  ];
}
