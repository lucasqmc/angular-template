import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomepageComponent } from './homepage/homepage.component';


const PAGES_COMPONENTS = [
  PagesComponent,HomepageComponent
];

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [PagesComponent],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule { }
