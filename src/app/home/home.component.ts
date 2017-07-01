import { Component, OnInit } from '@angular/core';

import { GalleriaModule } from 'primeng/primeng';

@Component({
  selector: 'prasun-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mainText = 'Late <u>Sumita Bhattacherjee</u>, the sole inspiration behind this ' +
  'philanthropic effort, was detected with ovarian cancer. While being ' +
  'under treatment, the idea of spreading awareness about the dreadful ' +
  'disease namely cancer came in her fertile mind. She finally came to ' +
  'the decision to form the society and fight the deadly disease through ' +
  'it.<br> <br> <center> We began with the motto:  <b>"PREVENTION IS BETTER THAN CURE"</b> </center> ' +
  '<br> We applied for the registration of <strong>"SILIGURI SUMITA ' +
  ' CANCER RELIEF WELFARE &amp; EDUCATIONAL SOCIETY"</strong>. The registration ' +
  'certificate however reached our hand on 2nd June, 2008, while the ' +
  'Article of Association &amp; Memorandum was received on 13th September ' +
  '2008. <br> We handed over the <i>Article of Association &amp; ' +
  ' Memorandum</i> to Mrs. Sumita Bhattacherjee at about 11.00 A.M. and on ' +
  'the same day. But most unfortunately she left for her heavenly abode ' +
  'at 3.24 P.M. leaving behind the onus of carrying forward her pledge:- ' +
  '<strong>"MAKE THIS WORLD ENTIRELY CANCER FREE"</strong> on us. <br> ' +
  'This (28/11/2008) awareness camp is our first step forwards the ' +
  'implement action of such an an ambitious dream.</p> ';  
  images: any[];
  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push({ source: 'http://lorempixel.com/600/300/sports/1/Title 1/', alt: 'test1', title: 'Title 1' });
    this.images.push({ source: 'http://lorempixel.com/600/300/sports/2/Title 2/', alt: 'test2', title: 'Title 2' });
    this.images.push({ source: 'http://lorempixel.com/600/300/sports/3/Title 3/', alt: 'test3', title: 'Title 3' });
    this.images.push({ source: 'http://lorempixel.com/600/300/sports/4/Title 4/', alt: 'test4', title: 'Title 4' });
    this.images.push({ source: 'http://lorempixel.com/600/300/sports/5/Title 5/', alt: 'test5', title: 'Title 5' });
    this.images.push({ source: 'http://lorempixel.com/600/300/sports/6/Title 6/', alt: 'test6', title: 'Title 6' });
    this.images.push({ source: 'http://lorempixel.com/600/300/sports/7/Title 7/', alt: 'test7', title: 'Title 7' });
  }

  currentImage(evImg) {
    console.log('This was called ...' + evImg.originalEvent + evImg.index + 1);
  }
}
