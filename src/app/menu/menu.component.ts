import { Component, OnInit } from '@angular/core';
import { MenuItem, } from 'primeng/primeng';
import { MenuService } from './menu.service';
import {AccordionModule} from 'primeng/primeng';

@Component({
  selector: 'prasun-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private items: MenuItem[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.items = [
      { label: 'Sumita Cancer Society', routerLink: [''] },
      {
        label: 'Organisation',
        items: [
          { label: 'Our Exclusive Work ', routerLink: ['/exclusive'] },
          {
            label: 'Events ...', routerLink: ['/events'],
            icon: 'fa-plus',
            items: [
              { label: 'On going Events ', routerLink: [''] },
              { label: 'Upcoming Events ', routerLink: [''] },
            ]
          },
          { label: 'Members', routerLink: ['/members'] },
          { label: 'News' , routerLink: ['/news']},
          { label: 'Awards', routerLink: [''] }
        ]
      },
      {
        label: 'Our Offices', routerLink: ['/office'],
        icon: 'fa-edit',
        items: [
          { label: 'Undo', icon: 'fa-mail-forward' },
          { label: 'Redo', icon: 'fa-mail-forward' }
        ]
      }
    ];

  }

}
