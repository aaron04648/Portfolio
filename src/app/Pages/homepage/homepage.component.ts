import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  images = [
    '../../../assets/img/prints/car_pfammatter.jpg',
    '../../../assets/img/prints/drinkcard_mascotte.jpg',
    '../../../assets/img/prints/f12_ehc.jpg',
    '../../../assets/img/prints/f12_mascotte.jpg',
    '../../../assets/img/prints/f12_neo.jpg',
    '../../../assets/img/prints/f200_neo.jpg',
    '../../../assets/img/prints/flyer_bikepass.jpg',
    '../../../assets/img/prints/flyer_ganterbratscher.jpg',
    '../../../assets/img/prints/flyer_lauber.jpg',
    '../../../assets/img/prints/flyer_mascotte_1.jpg',
    '../../../assets/img/prints/flyer_mascotte_2.jpg',
    '../../../assets/img/prints/flyer_mascotte_3.jpg',
    '../../../assets/img/prints/flyer_neo.jpg',
    '../../../assets/img/prints/flyer_pfammatter.jpg',
    '../../../assets/img/prints/flyer_rosswaldstube.jpg',
    '../../../assets/img/prints/magazin_ehc.jpg',
    '../../../assets/img/prints/rollup_sodalis.jpg',
    '../../../assets/img/prints/VK_pfammatter.jpg',
  ];
  constructor() {
    this.images = [...this.images, ...this.images];
  }
}
