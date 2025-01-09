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
      imageSource: '../../../assets/img/Michael_Salzgeber.jpeg',
      text: 'Die Zusammenarbeit mit Nike war äusserst angenehm und geprägt von einem konstruktiven Austausch. Gemeinsam konnten wir wertvolle Analysen durchführen, welche zu effektiven Massnahmen zur Verbesserung des Webshops fuhren werden.',
      personInformation: {
        name: 'Michael Salzgeber',
        subtitle: 'Spielbetrieb und Marketing EHC Visp',
      },
    },
    {
      imageSource: '../../../assets/img/silvio_burgener.jpg',
      text: 'Wir durften gemeinsam mit Nike verschiedene grafische Umsetzungen machen. Von der Modernisierung der Stadtpläne, über Kreation von ansprechenden Angebotsflyern, bis hin zur 3D animierten Visualisierung des Projekts Hängebrücke in Brig.',
      personInformation: {
        name: 'Direktor/CEO bei Brig-Simplon Tourismus AG',
        subtitle: 'Präsident der Neo Visp',
      },
    },
  ];
  nikeImages: string[] = [
    '../../../assets/img/nike/Bild_1.jpg',
    '../../../assets/img/nike/Bild_2.jpg',
    '../../../assets/img/nike/Bild_3.jpg',
    '../../../assets/img/nike/Bild_4.jpg',
    '../../../assets/img/nike/Bild_5.jpg',
    '../../../assets/img/nike/Bild_6.jpg',
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
