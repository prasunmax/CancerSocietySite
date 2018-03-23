import {Injectable} from '@angular/core';
import {SumitaHttpService} from '../shared/sumita-http.service';
import {Response} from '@angular/http';
import {ReplaySubject} from 'rxjs/Rx';

@Injectable()
export class ExclusiveService {
  public activeProject: ReplaySubject<any> = new ReplaySubject(1);

  constructor(private httpService: SumitaHttpService) {
  }

  getData(index) {

    // console.log('Was Here for Exclusive Service!!!');
    this.httpService.getData('exclusive/' + index).subscribe(
      data => this.activeProject.next(data)
    );
    return this.activeProject;
  }
}
