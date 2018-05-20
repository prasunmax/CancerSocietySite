import {Component, OnInit} from '@angular/core';
import {NewsService} from './news.service';
import {FormattedNews, News} from './news';
import {SITEURL} from '../shared/globals';
import {DialogService} from '../customDialog/dialog.service';
import {identity} from 'rxjs';


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

  constructor(private newsService: NewsService, private dialogService: DialogService) {
  }

  formatNews() {
    const page = this;
    this.formattedNews = new Array<FormattedNews>();
    let previd = '';
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
    this.dialogService.selEvent.subscribe(ev => {
      if (ev === 1) {
        page.index++;
      }
      if (ev === 2) {
        page.index--;
      }
      page.selectedNews = page.newspaper[page.index];
      // this.onDetailsShow(this.selectedNews);
      page.dialogService.getEventAvailable(page.index > 0, page.index < page.newspaper.length - 1);
    });
    this.newsService.getData('ALL').subscribe(function (data) {
      page.newspaper = data;
      page.formatNews();
    });
  }

  selectedPaper(event: Event, paper: News, idx: number) {
    event.preventDefault();
    this.selectedNews = paper;
    this.displayDialog = true;
    this.index = this.newspaper.indexOf(paper);
    this.dialogService.getEventAvailable(this.index > 0, this.index < this.newspaper.length - 1);
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
