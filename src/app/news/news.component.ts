import {Component, OnInit} from '@angular/core';
import {NewsService} from './news.service';
import {FormattedNews, News} from './news';
import {SITEURL} from '../shared/globals';


@Component({
  selector: 'prasun-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  index = 0;
  newsType = '';
  formattedNews: FormattedNews[];
  newspaper: News[];
  selectedNews: News;
  displayDialog: boolean;

  constructor(private newsService: NewsService) {
  }

  formatNews() {
    const page = this;
    this.formattedNews = new Array<FormattedNews>();
    let previd: string = '';
    let thisformattedNews: FormattedNews;
    this.newspaper.forEach(function (item: News) {
      if (item.ID !== previd) {
        const curformattedNews: FormattedNews = new FormattedNews('newspaper' + item.ID, SITEURL + item.url, new Array<News>());
        thisformattedNews = curformattedNews;
        page.formattedNews.push(curformattedNews);
        previd = item.ID;
      }
      item.url = SITEURL + item.url; // modify site url
      thisformattedNews.news.push(item);
    });
  }

  ngOnInit() {
    const page = this;
    this.newsService.getData('ALL').subscribe(function (data) {
      page.newspaper = data;
      page.formatNews();
    });
  }

  selectedPaper(event: Event, paper: News, idx: number) {
    event.preventDefault();
    this.selectedNews = paper;
    this.displayDialog = true;
    console.log('Current Index:' + idx);
  }

  onDialogHide() {
    this.selectedNews = null;
  }

  onTabOpen(e, type: string) {

    this.index = e.index;
    const page = this;
    if (type) {
      this.newsType = type;
    } else {
      this.newsType = '';
    }
    if (this.newsType === 'ALL') {
      this.newsService.getData(this.newsType).subscribe(function (data) {
        page.newspaper = data;
        page.formatNews();
      }, function (err) {
        console.error(err);
      }, function () {
        console.log('done');
      });
    }
  }
}
