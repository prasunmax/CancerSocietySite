import {Component, NgZone, OnInit} from '@angular/core';

import {GalleriaModule} from 'primeng/primeng';
import {EventsService} from '../events/events.service';
import {EventBean} from '../events/events';
import {SITEURL} from '../shared/globals';

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
    'it.<br> <br> <p class="text-center"> We began with the motto:  <b>"PREVENTION IS BETTER THAN CURE"</b> </p> ' +
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
  mkText = 'Hope is what helps us carry on when we have no more chance left to bank upon. ' +
    'I haven\'t lost hope yet. With the blessings of God, I assure you of a bright future in a cancer free world.\n' +
    '            <br/><br/>\n' +
    '            These aren\'t hollow words uttered only to establish one\'s oratorical skills. I do believe in this ' +
    'cause and its possibility. Cancer can be avoided if we become aware of the precautions. The clichéd saying is ' +
    'still relevant - Prevention is better than cure. Awareness is of course the best medicine. Besides, inculcating ' +
    'healthy food habit, regular medical check-up and non-indulgence in all carcinogenic activities are some of the ' +
    'sensible acts to be practiced in a serious manner.\n' +
    '            <br/><br/>\n' +
    '            A bit of conscious effort, and then we all can together prevent this dreaded disease from becoming ' +
    'the epidemic that it threatens to become by 2020! It is our dream to ensure that the beautiful smile that now ' +
    'lights up your face remains on it till your last breath. We know that the best way to make dreams come true is to ' +
    'wake up. Let us be awake and aware and hand in hand, turn our dream into a reality.\n' +
    '            <br/><br/>\n' +
    '            With regards,<br/>\n' +
    '            M.K. Bhattacharjee';
  papText = 'The world is under the grip of the dreaded disease called cancer. I feel helpless when I see how little ' +
    'progress has been achieved in culminating the killer disease.  I hear the voice of my soul to stand by the ' +
    'cancer patients and try to do something to give solace to the fateful multitude confronting it. We are pledged ' +
    'to make them feel that there are people who do care and love to stand by them. They work zealously to save the ' +
    'world from the disease.\n' +
    '            <br/><br/>\n' +
    '            A dream of seeing the smile in the faces of numerous cancer patients is what prompted me to work in ' +
    'the direction. I fully realize the pains and sufferings that the patients have to pass through as I have seen how ' +
    'my father suffered from the disease and succumbed to it. I felt obliged when the offer came to me from such a new ' +
    'born organization to act upon and to do something for the cause.\n' +
    '            <br/><br/>\n' +
    '            I sincerely feel that the only remedy at our hand is now to make people aware of the signs and ' +
    'symptoms of the disease so that the patient can receive treatment at a primary stage and get relief from pain ' +
    'both physically and mentally. The Himalayan tusk demands committed participation, wholesome dedication and above' +
    ' all inspiration from the heart.\n' +
    '            <br/><br/>\n' +
    '            I pray to all Karmayogi Members to work jointly and build the organization in such a formidable ' +
    'shape that it becomes capable of showing new rays of hope to each dejected and unfortunate soul having ' +
    'detected with cancer.\n' +
    '            <br/><br/>\n' +
    '            I don’t fear to dream of the apparently impossible. <br/><br/>\n' +
    '            Lovingly yours,<br/>\n' +
    '            Papiya Sengupta';
  images: any[];
  width = 500;
  height = 500;
  private maxWidth = 500;
  eventDet: EventBean[];
  display = false;
  dlgTxt = '';
  imgSrc = '';

  constructor(private eventService: EventsService, private ngZone: NgZone) {
    const page = this;
    window.onresize = (e) => {
      ngZone.run(() => {
          if (!window.matchMedia('(max-width: 40em)').matches) {
            page.width = window.innerWidth * 2 / 5;
          } else {
            page.width = window.innerWidth;
          }
          page.height = page.width;
          // console.log(page.width);
        }
      );
    };
  }

  ngOnInit() {
    const page = this;
    if (!window.matchMedia('(max-width: 40em)').matches) {
      this.width = window.innerWidth * 2 / 5;
    } else {
      this.width = window.innerWidth;
    }
    this.height = page.width;
    // Welcome images are stored in Events table with event_type 3
    this.eventService.getData('ALL', 3).subscribe(function (data) {
      page.eventDet = data;
      page.images = [];
      for (const entry of page.eventDet) {
        // console.log(entry);
        page.images.push({source: SITEURL + 'events_image/' + entry.imgUrl, alt: entry.details, title: entry.title});
      }
    }, function (err) {
      console.error(err);
    }, function () {
      // console.log('done');
    });
    // this.images = [];
    // this.images.push({ source: 'http://lorempixel.com/600/300/sports/1/Title 1/', alt: 'test1', title: 'Title 1' });
    // this.images.push({ source: 'http://lorempixel.com/600/300/sports/2/Title 2/', alt: 'test2', title: 'Title 2' });
    // this.images.push({ source: 'http://lorempixel.com/600/300/sports/3/Title 3/', alt: 'test3', title: 'Title 3' });
    // this.images.push({ source: 'http://lorempixel.com/600/300/sports/4/Title 4/', alt: 'test4', title: 'Title 4' });
    // this.images.push({ source: 'http://lorempixel.com/600/300/sports/5/Title 5/', alt: 'test5', title: 'Title 5' });
    // this.images.push({ source: 'http://lorempixel.com/600/300/sports/6/Title 6/', alt: 'test6', title: 'Title 6' });
    // this.images.push({ source: 'http://lorempixel.com/600/300/sports/7/Title 7/', alt: 'test7', title: 'Title 7' });
  }

  currentImage(evImg) {
    console.log('This was called ...' + evImg.originalEvent + evImg.index + 1);
  }

  showDialog(type) {
    this.display = true;
    if (type === 1) {
      this.imgSrc = SITEURL + 'image/madam_pic.jpg';
      this.dlgTxt = this.papText;
    }
    if (type === 2) {
      this.imgSrc = SITEURL + 'image/PINCC_me.jpg';
      this.dlgTxt = this.mkText;
    }
  }

  hideDialog() {
    this.display = false;
  }
}
