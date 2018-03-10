import {Component, OnInit} from '@angular/core';
import {EventBean} from './events';
import {EventsService} from './events.service';
import {ActivatedRoute} from '@angular/router';
import {SITEURL} from '../shared/globals';

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
  index: number;
  thisEventId: number;

  constructor(private eventService: EventsService, private route: ActivatedRoute) {
    this.displayDialog = false;
    this.thisEventId = route.snapshot.data[0]['id'];
  }

  ngOnInit() {
  }

  selectedEvent(event: Event, evBean: EventBean, idx: number) {
    event.preventDefault();
    this.selectedEvents = evBean;
    this.displayDialog = true;
    console.log('Current Index:' + idx);
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
