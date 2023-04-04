import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { AboutMePageComponent } from './components/about-me-page/about-me-page.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'contact', component: ContactPageComponent},
  {path:'project', component: ProjectPageComponent},
  {path:'aboutme', component: AboutMePageComponent},
  {path:'home', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
