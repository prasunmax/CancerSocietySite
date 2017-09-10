import {Component, OnInit} from '@angular/core';
import {NewsService} from './news.service';
import {News} from './news';


enum NewsPaperName {
  UB,
  SD,
  US,
  AK,
  BD,
  DJ,
  HD,
  JS,
  PK,
  TS
};

@Component({
  selector: 'prasun-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  index = 0;
  newsType = '';
  newspaper: News[];
  newspaperUB: News[];
  newspaperSD: News[];
  newspaperUS: News[];
  newspaperAK: News[];
  newspaperBD: News[];
  newspaperDJ: News[];
  newspaperHD: News[];
  newspaperJS: News[];
  newspaperPK: News[];
  newspaperTS: News[];
  selectedNews: News;
  displayDialog: boolean;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
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
      this.newsType = NewsPaperName[this.index].toString();
    }
    this.newsService.getData(this.newsType).subscribe(function (data) {
      if (page.index === NewsPaperName.UB) {
        page.newspaperUB = data;
      }
      if (page.index === NewsPaperName.SD) {
        page.newspaperSD = data;
      }
      if (page.index === NewsPaperName.US) {
        page.newspaperUS = data;
      }
      if (page.index === NewsPaperName.AK) {
        page.newspaperAK = data;
      }
      if (page.index === NewsPaperName.BD) {
        page.newspaperBD = data;
      }
      if (page.index === NewsPaperName.DJ) {
        page.newspaperDJ = data;
      }
      if (page.index === NewsPaperName.HD) {
        page.newspaperHD = data;
      }
      if (page.index === NewsPaperName.JS) {
        page.newspaperJS = data;
      }
      if (page.index === NewsPaperName.PK) {
        page.newspaperPK = data;
      }
      if (page.index === NewsPaperName.TS) {
        page.newspaperTS = data;
      }
      if (page.newsType === 'ALL') {
        page.newspaper = data;
      }
      console.log('Completed !!!' + data);
    }, function (err) {
      console.error(err);
    }, function () {
      console.log('done');
    });
  }

}
