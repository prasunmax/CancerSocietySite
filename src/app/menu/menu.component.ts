import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {MenuService} from './menu.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'prasun-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  private isAuthorised: boolean;

  constructor(private menuService: MenuService, public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    this.isAuthorised = this.auth.isAuthenticated();
    this.items = [
      {label: 'Sumita Cancer Society', routerLink: ['']},
      {
        label: 'Organisation',
        items: [
          {label: 'Our Exclusive Work ', routerLink: ['/exclusive']},
          {
            label: 'Events ...',
            icon: 'fa-plus',
            items: [
              {label: 'On going Events ', routerLink: ['/ongoing']},
              {label: 'Upcoming Events ', routerLink: ['/upcoming']},
            ]
          },
          {label: 'Our Offices', routerLink: ['/office']},
          {label: 'The Disease', routerLink: ['/disease']},
          {label: 'Members', routerLink: ['/members']},
          {label: 'Members Edit', visible: this.isAuthorised, routerLink: ['/membersE']},
          {label: 'On The News', routerLink: ['/news']},
          {label: 'Awards', routerLink: ['/awards']}
        ]
      }
    ];

  }

}
