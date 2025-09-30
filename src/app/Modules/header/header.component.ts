import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  page: string = '';
  showMobileView: boolean = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log(window.innerWidth);
    this.checkUrl();
    this.router.events.subscribe(() => {
      this.checkUrl();
    });

    if (window.innerWidth >= 450) {
      this.showMobileView = true;
    }
  }
  checkUrl() {
    this.page = this.router.url;
  }
}
