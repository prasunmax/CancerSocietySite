import { Component, OnInit } from '@angular/core';
import {Disease} from './disease';

@Component({
  selector: 'prasun-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {
  diseases: Disease[];
  constructor() { }

  ngOnInit() {
  }

}
