import { Injectable } from '@angular/core';
import {SumitaHttpService} from '../shared/sumita-http.service';
import 'rxjs/Rx';

@Injectable()
export class NewsService {
  constructor(private httpService: SumitaHttpService) { }
  getData(paperName: String) {
    console.log('Was Here for Members Service!!!');
    return this.httpService.getData('newspaper/' + paperName);
  }
}
