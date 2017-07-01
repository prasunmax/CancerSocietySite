import { Injectable } from '@angular/core';
import { SumitaHttpService } from '../shared/sumita-http.service';

@Injectable()
export class MenuService {

  constructor(private httpService: SumitaHttpService) { }
  getMenuDetails() {
    this.httpService.getData('');
  }
}
