import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) {
  }
  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
  ngOnInit() {
    this.toggle(); 
  }

}
