import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {NewHttpService} from '../shared/new-http.service';

@Injectable()
export class EventsService {
  private eventPath: string;

  constructor(private httpService: NewHttpService) {
  }

  // Doing it here for now as I am not able to get the correct place where the abstraction can be made, hopefully
  // I will be able to get it away from here.
  getData(path: string, type) {
    // 0 -> Events
    // 1 -> Upcoming
    // 2 -> Ongoing
    // 3 -> Welcome Images
    // 4 -> Disease
    if (type === 1) {
      this.eventPath = 'upcoming/';
    }
    if (type === 2) {
      this.eventPath = 'ongoing/';
    }
    if (type === 3) {
      this.eventPath = 'welcome/';
    }
    if (type === 4) {
      this.eventPath = 'disease/';
    }
    console.log('Was Here for Events Service!!!');
    return this.httpService.getData(this.eventPath + path);
  }
}
