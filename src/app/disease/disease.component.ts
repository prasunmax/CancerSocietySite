import {Component, OnInit} from '@angular/core';
import {Disease} from './disease';
import {DiseaseService} from './disease.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'prasun-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {
  diseases: Disease[];
  selectedDiseases: Disease;
  displayDialog: boolean;
  index: number;

  constructor(private diseaseService: DiseaseService, private route: ActivatedRoute) {
    this.displayDialog = false;
    console.log('Fetched id is' + route.snapshot.data[0]['id']);
  }

  ngOnInit() {
  }

  selectedDisease(event: Event, disease: Disease, idx: number) {
    event.preventDefault();
    this.selectedDiseases = disease;
    this.displayDialog = true;
    console.log('Current Index:' + idx);
  }

  onDetailsShow(disease: Disease) {
    const page = this;
    this.diseaseService.getData(disease.id).subscribe(function (data) {
      page.selectedDiseases = data;
      console.log('Completed !!!' + data);
    }, function (err) {
      console.error(err);
    }, function () {
      console.log('done');
    });
  }

  onDialogHide() {
    this.selectedDiseases = null;
  }

  loadData(e) {

    this.index = e.index;
    const page = this;

    this.diseaseService.getData('ALL').subscribe(function (data) {
      page.diseases = data;
      console.log('Completed !!!' + data);
    }, function (err) {
      console.error(err);
    }, function () {
      console.log('done');
    });

  }
}
