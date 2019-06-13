import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { MembersComponent } from './members/members.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'homepage',
    component: HomepageComponent ,
  },
  {
    path: 'perfil',
    component: PerfilComponent ,
  },
  {
    path: 'change-pass',
    component: ChangePassComponent ,
  },
  {
    path: 'membros',
    component: MembersComponent ,
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
