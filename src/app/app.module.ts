import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Modules/footer/footer.component';
import { HeaderComponent } from './Modules/header/header.component';
import { AboutMeComponent } from './Pages/about-me/about-me.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { MyWorksComponent } from './Pages/my-works/my-works.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutMeComponent,
    MyWorksComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Materials
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
