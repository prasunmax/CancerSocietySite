import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {Awards} from './awards';
import {SITEURL} from '../shared/globals';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'prasun-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class AwardsComponent implements OnInit {
  images: any[];
  msgs: Message[];


  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.images = [
      {awUrl: SITEURL + '/image/bharat_shiskha_ratan.jpg', name: 'Bharat Shiksha Ratan'},
      {awUrl: SITEURL + '/image/global_achievers_foundation.jpg', name: 'Bharat Shiksha Ratan'},
      {awUrl: SITEURL + '/image/ORIGINAL_ISO_CERTIFICATE.jpg', name: 'ISO 9001:2008 certified'},
    ];
    

    /*   this.images.push({
         source: SITEURL + '/image/bharat_shiskha_ratan.jpg',
         alt: 'Bharat Shiksha Ratan', title: 'Bharat Shiksha Ratan'
       });
       this.images.push({
         source: SITEURL + '/image/global_achievers_foundation.jpg', alt: 'Bharat Shiksha Ratan',
         title: 'Bharat Shiksha Ratan'
       });
       this.images.push({
         source: SITEURL + '/image/ORIGINAL_ISO_CERTIFICATE.jpg', alt: 'ISO 9001:2008 certified',
         title: 'ISO 9001:2008 certified'
       });*/
  }

  selectAward(award: Awards) {
    this.messageService.add({severity:'success', summary:'Service Message', detail:award.name});
  }
  clear() {
    this.messageService.clear();
}

}
