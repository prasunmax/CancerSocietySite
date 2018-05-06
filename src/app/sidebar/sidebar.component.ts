import {Component, ElementRef, NgZone, OnInit, Renderer2} from '@angular/core';
import {Sidebar} from 'primeng/components/sidebar/sidebar';
import {DomHandler} from 'primeng/components/dom/domhandler';

@Component({
  selector: 'prasun-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

})
export class PrasunSidebarComponent extends Sidebar implements OnInit {

  constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer2, zone: NgZone) {
    super(el, domHandler, renderer);
  }

  ngOnInit() {
  }

}
