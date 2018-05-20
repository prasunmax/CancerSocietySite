import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {NewHttpService} from '../shared/new-http.service';

@Injectable()
export class ExclusiveService {
  public activeProject: ReplaySubject<any> = new ReplaySubject(1);

  constructor(private httpService: NewHttpService) {
  }

  getData(index) {

    // console.log('Was Here for Exclusive Service!!!');
    this.httpService.getData('exclusive/' + index).subscribe(
      data => this.activeProject.next(data)
    );
    return this.activeProject;
  }
}
