import {Injectable} from '@angular/core';
import {SumitaHttpService} from '../shared/sumita-http.service';
import {Response} from '@angular/http';
import {ReplaySubject} from 'rxjs/Rx';

@Injectable()
export class OfficeService {
  pageLayout = 'list';

  constructor(private httpService: SumitaHttpService) {
  }

  getData() {
    console.log('Was Here for Office Service!!!');
    return this.httpService.getData('office');
  }
}
