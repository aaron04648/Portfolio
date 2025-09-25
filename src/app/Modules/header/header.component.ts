import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  page: string = '';
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.checkUrl();
    this.router.events.subscribe(() => {
      this.checkUrl();
    });
  }
  checkUrl() {
    this.page = this.router.url;
  }
}
