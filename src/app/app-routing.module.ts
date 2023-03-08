import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {ProjectsComponent} from './projects/projects.component'
import {HobbiesComponent} from './hobbies/hobbies.component'
import {PublicationsComponent} from './publications/publications.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
