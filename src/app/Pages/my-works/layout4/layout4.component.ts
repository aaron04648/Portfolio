import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout4',
  templateUrl: './layout4.component.html',
  styleUrls: ['./layout4.component.scss'],
})
export class Layout4Component {
  @Input() imageSources: string[] = [];
}
