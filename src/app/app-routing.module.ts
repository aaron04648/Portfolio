import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './Pages/about-me/about-me.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { MyWorksComponent } from './Pages/my-works/my-works.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'myWorks',
    component: MyWorksComponent,
  },
  {
    path: 'aboutMe',
    component: AboutMeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
