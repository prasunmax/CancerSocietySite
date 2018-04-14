import { Injectable } from '@angular/core';
import {NewHttpService} from '../shared/new-http.service';

@Injectable()
export class MenuService {

  constructor(private httpService: NewHttpService) {
  }
  getMenuDetails() {
    this.httpService.getData('');
  }
}
