import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {NewHttpService} from '../shared/new-http.service';

@Injectable()
export class NewsService {
  constructor(private httpService: NewHttpService) {
  }
  getData(paperName: String) {
    console.log('Was Here for News Service!!!');
    return this.httpService.getData('newspaper/' + paperName);
  }
}
