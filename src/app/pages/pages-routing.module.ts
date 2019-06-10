import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'homepage',
    component: HomepageComponent ,
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
