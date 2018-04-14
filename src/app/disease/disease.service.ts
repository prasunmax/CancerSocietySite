import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {NewHttpService} from '../shared/new-http.service';

@Injectable()
export class DiseaseService {
  constructor(private httpService: NewHttpService) {
  }

  getData(path: string) {
    console.log('Was Here for Members Service!!!');
    return this.httpService.getData('disease/' + path);
  }
}
