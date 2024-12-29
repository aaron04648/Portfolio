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
    trigger('MovePosition', [
      state('middle', style({ transform: 'translateX(0%)', opacity: 1 })),
      state('right', style({ transform: 'translateX(-20%)', opacity: 0.2 })),
      state('left', style({ transform: 'translateX(20%)', opacity: 0.2 })),
      transition('right => left', [animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class AboutMeComponent {
  slides: string[];
  i: number;
  customerLayouts = [
    {
      imageSource: '../../../assets/img/flavio_schmid.jpg',
      text: 'Nike Roten ist ein äusserst kompetenter und lösungsorientierter Grafiker, der kreative Herausforderungen mit viel Engagement meistert. Unsere Zusammenarbeit war stets konstruktiv, positiv und führte zu grossartigen Ergebnissen.',
      personInformation: {
        name: 'Flavio Schmid',
        subtitle: 'Präsident der Neo Visp',
      },
    },
    {
      imageSource: '../../../assets/img/flavio_schmid.jpg',
      text: 'Nike Roten ist ein äusserst kompetenter und lösungsorientierter Grafiker, der kreative Herausforderungen mit viel Engagement meistert. Unsere Zusammenarbeit war stets konstruktiv, positiv und führte zu grossartigen Ergebnissen.',
      personInformation: {
        name: 'Flavio Schmid',
        subtitle: 'Präsident der Neo Visp',
      },
    },
    {
      imageSource: '../../../assets/img/flavio_schmid.jpg',
      text: 'Nike Roten ist ein äusserst kompetenter und lösungsorientierter Grafiker, der kreative Herausforderungen mit viel Engagement meistert. Unsere Zusammenarbeit war stets konstruktiv, positiv und führte zu grossartigen Ergebnissen.',
      personInformation: {
        name: 'Flavio Schmid',
        subtitle: 'Präsident der Neo Visp',
      },
    },
  ];
  constructor() {
    this.customerLayouts = [...this.customerLayouts, ...this.customerLayouts];
    this.i = 0;
    this.slides = [
      '../../../assets/img/others/image-removebg-preview.png',
      '../../../assets/img/others/photoshop.png',
      '../../../assets/img/others/inDesign.png',
    ];
  }
  ngOnInit(): void {
    console.log(this.i);
  }

  getPrev() {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
    console.log(this.i);
  }

  getNext() {
    this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
    console.log(this.i);
  }
}
