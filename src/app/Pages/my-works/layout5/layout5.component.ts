import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout5',
  templateUrl: './layout5.component.html',
  styleUrls: ['./layout5.component.scss'],
})
export class Layout5Component {
  @Input() imageSources: string[] = [];
}
