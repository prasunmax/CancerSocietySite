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
  visibleSidebar1 = false;

  private isAuthorised: boolean;
  private e: any;

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  openMenu(e) {
    e.preventDefault();
    this.visibleSidebar1 = true;
  }

  closeMenu() {
    this.visibleSidebar1 = false;
  }

  ngOnInit() {
    this.isAuthorised = this.auth.isAuthenticated();
    this.items = [
      {label: 'Sumita Cancer Society', routerLink: [''], command : () => this.closeMenu()},
      {
        label: 'About...',
        items: [
          {label: 'Our Exclusive Work ', routerLink: ['/exclusive'], command : () => this.closeMenu()},
          {
            label: 'Events ...',
            icon: 'fa-plus',
            items: [
              {label: 'On going Events ', routerLink: ['/ongoing'], command : () => this.closeMenu()},
              {label: 'Upcoming Events ', routerLink: ['/upcoming'], command : () => this.closeMenu()},
            ]
          },
          {label: 'Our Offices', routerLink: ['/office'], command : () => this.closeMenu()},
          {label: 'The Disease', routerLink: ['/disease'], command : () => this.closeMenu()},
          {label: 'Members', routerLink: ['/members'], command : () => this.closeMenu()},
          {label: 'Members Edit', visible: this.isAuthorised, routerLink: ['/membersE'], command : () => this.closeMenu()},
          {label: 'On The News', routerLink: ['/news'], command : () => this.closeMenu()},
          {label: 'Awards', routerLink: ['/awards'], command : () => this.closeMenu()}
        ]
      }
    ];

  }

}
