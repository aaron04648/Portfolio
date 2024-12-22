import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('moveCenterToRight', [
      state('middle', style({ transform: 'translateX(0%)', opacity: 1 })),
      state('right', style({ transform: 'translateX(100%)', opacity: 0.2 })),
      transition('middle => right', [animate('0.5s ease-in-out')]),
    ]),
    trigger('moveLeftToMiddle', [
      state('left', style({ transform: 'translateX(-100%)', opacity: 0.2 })),
      state('middle', style({ transform: 'translateX(0%)', opacity: 1 })),
      transition('left => middle', [animate('0.5s ease-in-out')]),
    ]),
    trigger('moveRightToLeft', [
      state('right', style({ transform: 'translateX(100%)', opacity: 0.2 })),
      state('left', style({ transform: 'translateX(0%)', opacity: 0.2 })),
      transition('right => left', [animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class AboutMeComponent {
  slides: string[];
  i: number;

  constructor() {
    this.i = 0;
    this.slides = [
      'https://ep01.epimg.net/elcomidista/imagenes/2022/10/31/articulo/1667206537_604382_1667230832_noticia_normal.jpg',
      'https://storage.googleapis.com/css-photos/menu-photos/1d2d5a63-1603-473b-9464-e8fa6787f40b.jpeg',
      'https://ep01.epimg.net/elcomidista/imagenes/2022/01/11/receta/1641893642_902475_1641893828_noticia_normal.jpg',
    ];
  }
  getSlide() {
    return this.slides[this.i];
  }

  getPrev() {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
  }

  getNext() {
    this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
  }
}
