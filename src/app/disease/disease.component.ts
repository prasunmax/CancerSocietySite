import {Component, OnInit} from '@angular/core';
import {Disease} from './disease';

@Component({
  selector: 'prasun-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {
  diseases: Disease[];
  selectedDiseases: Disease;
  displayDialog: boolean;

  constructor() {
    this.displayDialog = false;
  }

  ngOnInit() {
  }

  selectedDisease(event: Event, disease: Disease, idx: number) {
    event.preventDefault();
    this.selectedDiseases = disease;
    this.displayDialog = true;
    console.log('Current Index:' + idx);
  }

}
