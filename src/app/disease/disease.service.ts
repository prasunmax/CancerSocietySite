import {Injectable} from '@angular/core';
import {SumitaHttpService} from '../shared/sumita-http.service';
import 'rxjs/Rx';

@Injectable()
export class DiseaseService {
  constructor(private httpService: SumitaHttpService) {
  }

  getData(path: string) {
    console.log('Was Here for Members Service!!!');
    return this.httpService.getData('disease/' + path);
  }
}
