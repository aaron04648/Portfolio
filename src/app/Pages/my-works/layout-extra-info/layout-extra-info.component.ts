import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-extra-info',
  templateUrl: './layout-extra-info.component.html',
  styleUrls: ['./layout-extra-info.component.scss'],
})
export class LayoutExtraInfoComponent {
  @Input() imageSources: string[] = [];
  @Input() bgColor: string[] = [];
  @Input() text: string = '';
  @Input() title: string = '';
  @Input() reversed: boolean = false;
}
