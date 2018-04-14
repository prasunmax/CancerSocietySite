import {Injectable} from '@angular/core';
import {NewHttpService} from '../shared/new-http.service';

@Injectable()
export class OfficeService {
  pageLayout = 'list';

  constructor(private httpService: NewHttpService) {
  }

  getData() {
    console.log('Was Here for Office Service!!!');
    return this.httpService.getData('office');
  }
}
