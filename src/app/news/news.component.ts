
import { Component, OnInit } from '@angular/core';

import {AccordionModule} from 'primeng/primeng';
import {SharedModule} from 'primeng/primeng';

@Component({
  selector: 'prasun-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  index = 0;

  constructor() { }

  ngOnInit() {
  }

  onTabOpen(e) {
    this.index = e.index;
    alert(this.index);
  }

}
