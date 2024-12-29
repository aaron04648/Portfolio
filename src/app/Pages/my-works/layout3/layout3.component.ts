import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout3',
  templateUrl: './layout3.component.html',
  styleUrls: ['./layout3.component.scss'],
})
export class Layout3Component {
  @Input() imageSources: string[] = [];
}
