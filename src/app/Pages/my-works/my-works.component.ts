import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.scss'],
})
export class MyWorksComponent {
  layout: string = 'print';
  expandContainer: boolean = false;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  showFullContainer() {
    this.expandContainer = !this.expandContainer;
    console.log(this.expandContainer);
    
  }
}
