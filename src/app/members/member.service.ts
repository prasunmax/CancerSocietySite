import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {NewHttpService} from '../shared/new-http.service';

@Injectable()
export class MemberService {
  private index = 0;
  private information;

  constructor(private httpService: NewHttpService) {
  }

  setData(index) {
    this.index = index;
  }

  getData() {
    console.log('Was Here for Members Service!!!');
    return this.httpService.getData('members/' + this.index);
  }
}
