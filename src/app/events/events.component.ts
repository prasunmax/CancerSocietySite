import {Component, OnInit} from '@angular/core';
import {EventBean} from './events';
import {EventsService} from './events.service';
import {ActivatedRoute} from '@angular/router';

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

  selectedDisease(event: Event, disease: EventBean, idx: number) {
    event.preventDefault();
    this.selectedEvents = disease;
    this.displayDialog = true;
    console.log('Current Index:' + idx);
  }

  onDetailsShow(disease: EventBean) {
    const page = this;
    this.eventService.getData(disease.id, this.thisEventId).subscribe(function (data) {
      page.selectedEvents = data;
      console.log('Completed !!!' + data);
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
