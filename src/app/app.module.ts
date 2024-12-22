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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerLayoutComponent } from './Pages/about-me/customer-layout/customer-layout.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LayoutExtraInfoComponent } from './Pages/my-works/layout-extra-info/layout-extra-info.component';
import { Layout1Component } from './Pages/my-works/layout1/layout1.component';
import { Layout2Component } from './Pages/my-works/layout2/layout2.component';
import { Layout3Component } from './Pages/my-works/layout3/layout3.component';
import { Layout4Component } from './Pages/my-works/layout4/layout4.component';
import { Layout5Component } from './Pages/my-works/layout5/layout5.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutMeComponent,
    MyWorksComponent,
    FooterComponent,
    HeaderComponent,

    Layout1Component,
    Layout2Component,
    Layout3Component,
    Layout4Component,
    Layout5Component,
    LayoutExtraInfoComponent,
    ContactComponent,
    CustomerLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Materials
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
