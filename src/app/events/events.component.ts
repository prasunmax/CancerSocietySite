import {Component, OnInit} from '@angular/core';
import {EventBean} from './events';
import {EventsService} from './events.service';
import {ActivatedRoute} from '@angular/router';
import {SITEURL} from '../shared/globals';
import {DialogService} from './dialog.service';

@Component({
  selector: 'prasun-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  dialogText = 'Disease Details';
  eventDet: EventBean[];
  selectedEvents: EventBean;
  displayDialog: boolean;
  index = 0;
  thisEventId: number;

  constructor(private eventService: EventsService, private route: ActivatedRoute, private dialogService: DialogService) {
    this.displayDialog = false;
    this.thisEventId = route.snapshot.data[0]['id'];
  }

  ngOnInit() {
    this.dialogService.selEvent.subscribe(ev => {
      if (ev === 1) {
        this.index++;
      }
      if (ev === 2) {
        this.index--;
      }
      this.selectedEvents = this.eventDet[this.index];
      this.onDetailsShow(this.selectedEvents);
      this.dialogService.getEventAvailable(this.index > 0, this.index < this.eventDet.length);
    });
  }

  selectedEvent(event: Event, evBean: EventBean, idx: number) {
    event.preventDefault();
    this.selectedEvents = evBean;
    this.displayDialog = true;

    this.index = this.eventDet.indexOf(evBean);
    this.dialogService.getEventAvailable(this.index > 0, this.index < this.eventDet.length);
    console.log('Current Index:' + this.index);
  }

  hasPrevEvent() {
    if (this.index === 0) {
      return false;
    } else {
      return true;
    }
  }

  hasNextEvent() {
    if (this.index === this.eventDet.length - 1) {
      return false;
    } else {
      return true;
    }
  }

  nextEvent() {
    this.index++;
    this.selectedEvents = this.eventDet[this.index];
  }

  prevEvent() {
    this.index--;
    this.selectedEvents = this.eventDet[this.index];
  }

  onDetailsShow(eventBean: EventBean) {
    const page = this;
    this.eventService.getData(eventBean.id, this.thisEventId).subscribe(function (data) {
      page.selectedEvents = data[0];
      if (!page.selectedEvents.imgUrl) {
        page.selectedEvents.imgUrl = '';
      }
      if (page.selectedEvents.imgUrl !== '') {
        page.selectedEvents.imgUrl = SITEURL + 'events_image/' + page.selectedEvents.imgUrl;
      }
      page.selectedEvents.details = page.selectedEvents.details.replace('src="', 'src="' + SITEURL);
      page.dialogText = page.selectedEvents.title;

    }, function (err) {
      console.error(err);
    }, function () {
      console.log('done');
    });
  }

  onDialogHide() {
    this.selectedEvents = null;
  }

  loadData(e) {

    this.index = e.index;
    const page = this;

    this.eventService.getData('ALL', this.thisEventId).subscribe(function (data) {
      page.eventDet = data;
      console.log('Completed !!!' + data);
    }, function (err) {
      console.error(err);
    }, function () {
      console.log('done');
    });

  }
}
