import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent {

  constructor(private sidebarService: NbSidebarService) {
  }
  
  items = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link: [],
    },
    {
      title: 'Change Password',
      icon: 'lock-outline',
      link: [],
    },
    {
      title: 'Privacy Policy',
      icon: 'checkmark-outline',
      link: [],
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: [],
    },
  ];

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

}
