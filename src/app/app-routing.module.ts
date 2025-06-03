import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './Pages/about-me/about-me.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { MyWorksComponent } from './Pages/my-works/my-works.component';
import { SkillsComponent } from './Pages/skills/skills.component';

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
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
