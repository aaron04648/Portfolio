import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  visibleImages: string[] = [];
  positions: string[] = ['left', 'center', 'right'];
  currentIndex: number = 0;
  appImages: string[] = [
    '../../../assets/img/others/indesign.svg',
    '../../../assets/img/others/illustrator.svg',
    '../../../assets/img/others/aftereffects.svg',
    '../../../assets/img/others/photoshop.svg',
    '../../../assets/img/others/xd.svg',
    '../../../assets/img/others/google_web_designer.png',
    '../../../assets/img/others/premierepro.svg',
    '../../../assets/img/others/lightroom.svg',
  ];

  appTexts: string[] = ['65', '75', '55', '65', '20', '55', '15', '95'];
  currentText: string = this.appTexts[0];
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
        name: 'Silvio Burgener',
        subtitle: 'Direktor/CEO bei Brig-Simplon Tourismus AG',
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
  constructor() {}
  ngOnInit() {
    this.visibleImages = [
      this.appImages[0],
      this.appImages[1],
      this.appImages[2],
    ];
    setInterval(() => {
      this.rotateText();
      this.rotateImages();
      console.log(this.visibleImages);
    }, 5000);
  }

  rotateImages() {
    const nextImageIndex = (this.currentIndex + 3) % this.appImages.length;
    this.visibleImages = [
      this.visibleImages[1],
      this.visibleImages[2],
      this.appImages[nextImageIndex],
    ];

    // Index erhöhen, um das nächste Bild zu holen
    this.currentIndex = (this.currentIndex + 1) % this.appImages.length;
  }
  rotateText() {
    this.currentIndex = (this.currentIndex + 1) % this.appTexts.length;
    this.currentText = this.appTexts[this.currentIndex];
  }
}
