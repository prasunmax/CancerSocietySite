import {Component, OnInit} from '@angular/core';
import {OfficeService} from './office.service';
import {OfficeBean} from './office';

@Component({
  selector: 'prasun-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  offices: OfficeBean[];
  customeLayout = 'grid';

  constructor(private officeService: OfficeService) {
  }

  ngOnInit() {
    const page = this;
    this.officeService.getData().subscribe(function (data) {
      page.offices = data;
      console.log('Completed !!!');
    }, function (err) {
      console.error(err);
    }, function () {
      console.log('done');
    });
  }

}
