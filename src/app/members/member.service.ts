import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { SumitaHttpService } from '../shared/sumita-http.service';
import 'rxjs/Rx'; 

@Injectable()
export class MemberService {
  private index = 0;
  private information;

  constructor(private httpService: SumitaHttpService) {
  }

  setData(index) {
    this.index = index;
  }

  getData() {
    console.log('Was Here for Members Service!!!');
    return this.httpService.getData('members/' + this.index);/*.toPromise()
      .then(data => {
        return data;
      });
      /*.subscribe(
        (data) => this.information = data,
      (error)=> console.log(error)
      );*/
      
  }
}
