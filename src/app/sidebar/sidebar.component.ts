import {ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, Renderer2} from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import {DomHandler} from 'primeng/dom';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'prasun-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

})
export class PrasunSidebarComponent extends Sidebar implements OnInit {

  constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer2, zone: NgZone, cd: ChangeDetectorRef, config: PrimeNGConfig) {
    super(el, renderer,cd, config);
  }

  ngOnInit() {
  }

}
