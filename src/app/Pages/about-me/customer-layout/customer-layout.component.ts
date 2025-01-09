import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.scss'],
})
export class CustomerLayoutComponent {
  @Input() imageSources: string = '';
  @Input() text: string = '';
  @Input() personInformation: { name: string; subtitle: string }[] = [
    { name: '', subtitle: '' },
  ];
}
