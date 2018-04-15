import {EventEmitter, Injectable, Output} from '@angular/core';
import {EventBean} from './events';

@Injectable()
export class DialogService {

  @Output() isPrevAvailable: EventEmitter<boolean> = new EventEmitter();
  @Output() isNextAvailable: EventEmitter<boolean> = new EventEmitter();
  @Output() nextEvent: EventEmitter<EventBean> = new EventEmitter();
  @Output() selEvent: EventEmitter<Number> = new EventEmitter();
  prevAvailable: boolean;
  nextAvailable: boolean;
  ev: EventBean;
  selType: Number = 0;

  constructor() {
  }

  getEventAvailable(prev, next) {
    this.prevAvailable = prev;
    this.nextAvailable = next;
    this.isNextAvailable.emit(this.nextAvailable);
    this.isPrevAvailable.emit(this.prevAvailable);
  }

  setSelType(num) {
    this.selType = num;
    this.selEvent.emit(this.selType);
  }
}
