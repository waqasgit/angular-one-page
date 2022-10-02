import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper";

SwiperCore.use([Keyboard, Pagination, Navigation]);

@Component({
  selector: 'customer-services',
  templateUrl: './customer-services.component.html',
  styleUrls: ['./customer-services.component.css']
})
export class CustomerServicesComponent implements OnInit {
  
  serviceTilesArray = [
    {
      icon: 'fa-solid fa-gauge-high',
      title: 'Fast and accurate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: 'fa-solid fa-rectangle-list',
      title: 'Strict Compliance',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: 'fa-solid fa-circle-user',
      title: 'Qualified Professionals',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: 'fa-solid fa-clock-rotate-left',
      title: 'Online and Real Time Control',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: 'fa-regular fa-flag',
      title: 'EU Wide Coverage',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    },
    {
      icon: 'fa-regular fa-lightbulb',
      title: 'Innovation & Digitilization',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
