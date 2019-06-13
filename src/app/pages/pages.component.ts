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
      title: 'Perfil',
      icon: 'person-outline',
      link: '/pages/perfil',
    },
    {
      title: 'Alterar Senha',
      icon: 'lock-outline',
      link: '/pages/change-pass',
    },
    {
      title: 'Membros',
      icon: 'people',
      link: '/pages/membros',
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
