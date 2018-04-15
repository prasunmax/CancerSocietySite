import {Component, DoCheck, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, Renderer2} from '@angular/core';
import {Dialog} from 'primeng/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {EventBean} from './events';
import {DialogService} from './dialog.service';
import {DomHandler} from 'primeng/api';

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
              renderer: Renderer2, zone: NgZone) {
    // noinspection JSAnnotator
    super(el, domHandler, renderer, zone);
  }

  ngOnInit() {
    this.dialogService.nextEvent.subscribe(ev => {
      this.thisEvent = ev;
    });
    this.dialogService.isNextAvailable.subscribe(ev => {
      this.rightVisible = ev;
    });
    this.dialogService.isPrevAvailable.subscribe(ev => {
      this.leftVisible = ev;
    });
  }

  // 1 Next
  // 2 Prev
  next(ele) {
    this.dialogService.setSelType(1);
  }

  prev(ele) {
    this.dialogService.setSelType(2);
  }
}
