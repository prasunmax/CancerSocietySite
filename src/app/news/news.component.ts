import {Component, OnInit} from '@angular/core';
import {NewsService} from './news.service';
import {News} from './news';

enum NewsPaperName {
  UB,
  ABP,
  AK,
  BD,
  DJ,
  HD,
  JS,
  PK
};

@Component({
  selector: 'prasun-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  index = 0;
  newspaper: News[][];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
  }

  onTabOpen(e) {
    this.index = e.index;
    const page = this;
    this.newsService.getData(NewsPaperName[this.index].toString()).subscribe(function (data) {
      page.newspaper[this.index] = data;

      console.log('Completed !!!' + data);
    }, function (err) {
      console.error(err);
    }, function () {
      console.log('done');
    });
  }

}
