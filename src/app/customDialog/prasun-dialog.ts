import {ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, Renderer2} from '@angular/core';
import {Dialog} from 'primeng/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {EventBean} from '../events/events';
import {DialogService} from './dialog.service';
import {DomHandler} from 'primeng/dom';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'prasun-dialog',
  templateUrl: './prasunDialog.html',
  animations: [trigger('dialogState', [
    state('hidden', style({
      opacity: 0
    })),
    state('visible', style({
      opacity: 1
    })),
    transition('visible => hidden', animate('400ms ease-in')),
    transition('hidden => visible', animate('400ms ease-out'))
  ])],
})
export class PrasunDialogComponent extends Dialog implements OnInit {
  leftVisible = false;
  rightVisible = true;
  width = 200;
  height = 300;
  minWidth = 200;
  minHeight = 300;


  thisEvent: EventBean;
  //
  // @Input() value: EventBean[];
  // @Input() set curEvent(ev: EventBean) {
  //   this.thisEvent = ev;
  //   this.eventChange.emit(this.thisEvent);
  // }
  // get curEvent(): EventBean {
  //   return this.thisEvent;
  // }
  // @Output() eventChange: EventEmitter = new EventEmitter();
  // private selectedEvents: EventBean;
  constructor(private dialogService: DialogService, el: ElementRef, domHandler: DomHandler,
              renderer: Renderer2, zone: NgZone, cd: ChangeDetectorRef, config: PrimeNGConfig) {
    // noinspection JSAnnotator
    super(el, renderer, zone, cd, config);
  }

  ngOnInit() {
    this.dialogService.isNextAvailable.subscribe(ev => {
      this.rightVisible = ev;
    });
    this.dialogService.isPrevAvailable.subscribe(ev => {
      this.leftVisible = ev;
    });
  }

  // 1 Next
  // 2 Prev
  next() {
    this.dialogService.setSelType(1);
  }

  prev() {
    this.dialogService.setSelType(2);
  }
}
