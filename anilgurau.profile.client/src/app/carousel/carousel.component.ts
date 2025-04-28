import { ChangeDetectorRef, Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  customOptions: OwlOptions = {
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: false,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 1,  // <- tiny timeout
      autoplaySpeed: 2000, // <- slow speed
      autoplayHoverPause: false,
      smartSpeed: 2000,    // <- smooth transition speed
      items: 3,            // number of slides shown
      slideTransition: 'linear', // <- IMPORTANT for continuous effect
    }

}
