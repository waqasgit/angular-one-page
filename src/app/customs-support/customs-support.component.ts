import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customs-support',
  templateUrl: './customs-support.component.html',
  styleUrls: ['./customs-support.component.css']
})
export class CustomsSupportComponent implements OnInit {

  customsSupportTilesArray = [
    {
      image: 'customs-support',
      title: 'Import customs clearance',
      description: 'If you would like to import goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of import documents, classification of import goods with the correct HS code, coordination of physical inspection and duty management.',
      showLearnMore: true
    },
    {
      image: 'customs-support',
      title: 'Export customs clearance',
      description: 'If you would like to export goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of export documents, classification of export goods with the correct HS code, coordination of physical inspection and duty management.',
      showLearnMore: true
    },
    {
      image: 'customs-support',
      title: 'Customs transit procedures',
      description: 'We assist you in all requirements for different types of transit procedures and ensure the correct handling of customs clearance. Our customs experts take care of T1 transit declarations and arrange the transport of the goods, accompanied by the correct transit documents.',
      showLearnMore: true
    },
    {
      image: 'customs-support',
      title: 'Export customs clearance',
      description: 'If you would like to export goods from a third country to within the European Union, Customs Support assists you in every step of the customs clearance process. Our customs experts take care of export documents, classification of export goods with the correct HS code, coordination of physical inspection and duty management.',
      showLearnMore: true
    },
    {
      image: 'customs-support',
      title: 'Customs transit procedures',
      description: 'We assist you in all requirements for different types of transit procedures and ensure the correct handling of customs clearance. Our customs experts take care of T1 transit declarations and arrange the transport of the goods, accompanied by the correct transit documents.',
      showLearnMore: true
    }
  ];

  breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
