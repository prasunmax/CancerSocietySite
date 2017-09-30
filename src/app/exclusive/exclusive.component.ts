import {Component, NgZone, OnInit} from '@angular/core';
import {ExclusiveService} from './exclusive.service';

declare var Raphael: any;

@Component({
  selector: 'prasun-exclusive',
  templateUrl: './exclusive.component.html',
  styleUrls: ['./exclusive.component.css']
})
export class ExclusiveComponent implements OnInit {
  private mainText = 'Test';
  private headerText: string;
  private posX = 0.0;
  private posY = 0.0;
  private sposX = 0.0;
  private sposY = 0.0;
  private w = 0;
  private h = 0;
  private ms = 500;
  private c;
  private sc;
  private p;
  private sp;
  private paper: any;
  private width = 500;
  private height = 500;
  private fontSize = 0;
  private xfactor = 3;
  private yfactor = 7;
  private maxWidth = 500;
  private items = [];
  private colorArray: string[] = ['#cc9900', '#ee9977', '#009999', '#aacc33', '#557733'];
  private posArray: number[] = [180, 225, 270, 315, 360];

  constructor(private exclusiveService: ExclusiveService,
              private ngZone: NgZone) {
    this.exclusiveService.getData(-1);
    const page = this;
    window.onresize = (e) => {
      ngZone.run(() => {
        page.width = window.innerWidth;
        page.height = window.innerWidth;
        console.log(this.width);
        page.finaliseItems();
      });
    };
  }

  ngOnInit() {
    this.width = window.innerWidth;
    this.height = window.innerWidth;
    // this.finaliseItems();
    const page = this;
    this.exclusiveService.activeProject.subscribe(function (data) {
      page.populateItem(data);
      page.mainText = data[0]['exclusive_details'];
      console.log(page.mainText);
      page.headerText = data[0]['exclusive_name'].replace('\\n', '\n');
      page.finaliseItems();
      console.log(this.headerText);
      console.log('Completed !!!');
    }, function (err) {
      console.error(err);
    }, function () {
      console.log('done');
    });
  }

  /*
  Ensuring that only the clicked item is updated
   */
  populateItem(data) {
    for (let i = 0; i < 5; i++) {
      if (data[i]) {
        this.items[+data[i]['exclusive_id'] - 1] = data[i];
      }
    }
  }

  calculateXY(angles) {
    this.posX = this.h * 1 / 2 + (this.h / this.xfactor * Math.cos(angles / 180 * Math.PI));
    this.posY = this.h / 2 + (this.h / this.xfactor * Math.sin(angles / 180 * Math.PI));
    this.sposX = this.h * 1 / 2 + (this.h / this.yfactor * Math.cos(angles / 180 * Math.PI));
    this.sposY = this.h / 2 + (this.h / this.yfactor * Math.sin(angles / 180 * Math.PI));
  }

  drawCircles(height) {
    console.log(this.height * 1 / 2 + ' ' + this.height + ' ' + this.height * 25 / 40);
    this.paper.circle(height * 1 / 2, height / 2, height * 1 / this.xfactor).attr({'hue': .45, 'fill': 'red'});
    this.paper.circle(height * 1 / 2, height / 2, height * 1 / this.yfactor).attr({'hue': .45, 'fill': 'blue'});
  }

  finaliseItems() {
    document.getElementById('OurWork').innerHTML = '';
    if (this.width > this.maxWidth) {
      this.width = this.maxWidth;
    }
    this.paper = Raphael('OurWork', this.width, this.width * 3 / 4);
    this.paper.rect(0, 0, this.width, this.width * 3 / 4).attr('fill', 'gray');
    this.paper.setViewBox(0, 0, this.width, this.width * 3 / 4, true);
    // this.drawCircles(this.width);
    for (let i = 0; i < this.items.length; i++) {
      this.prepareItems(i);
    }
  }


  prepareItems(index) {
    if (this.items && this.items[index] && this.items[index]['exclusive_name'] !== '') {
      this.drawItems(this.width, this.width, this.items[index]['exclusive_index'],
        this.items[index]['exclusive_color'], this.items[index]['exclusive_id'],
        this.items[index]['exclusive_name'].replace('\\n', '\n'));
    }
    /*else {
         this.drawItems(this.width, this.width, this.posArray[index], this.colorArray[index],
           index + 1, 'May I help you');
       }*/
  }

  drawItems(width, height, pos, color, point: number, text) {
    this.w = width;
    this.h = height;
    this.fontSize = 13 * this.h / 500;
    // this.paper.setSize(2 * this.h, this.h);
    const st = this.paper.set();
    st.attr({'font-size': this.fontSize});
    const rad = this.w / 10;
    const radh = this.w / 8;
    const srad = this.w / 20;
    const sradh = this.w / 18;
    let firstid = 0;
    this.calculateXY(pos);
    if (firstid === 0) {
      firstid = 1;
    }
    // Draw a line between the two points
    this.paper.path('M' + this.posX + ' ' + this.posY + 'L' + this.sposX + ' ' + this.sposY);
    this.sc = this.paper.circle(this.sposX, this.sposY, srad).attr({'hue': .45});
    this.c = this.paper.circle(this.posX, this.posY, rad).attr({hue: .45});
    this.p = this.paper.text(this.posX, this.posY, text).attr({
      'font-size': this.fontSize
    });
    this.c.attr({fill: color, stroke: 'white'});
    this.sc.attr({fill: color, stroke: 'white'});
    this.sp = this.paper.text(this.sposX, this.sposY, point).attr({
      'font-size': this.fontSize,
      stroke: 'white',
      fill: 'white'
    });
    this.sc['cid'] = this.c.id;
    this.c['scid'] = this.sc.id;
    this.p['cid'] = this.c.id;
    this.p['scid'] = this.sc.id;
    this.sp['cid'] = this.c.id;
    this.sp['scid'] = this.sc.id;
    const parentInst = this; // Required as we want to use this instance from inside the event.
    this.c.mouseover(function () {
      this.stop().animate({r: radh}, this.ms, 'elastic');
      this.paper.getById(this.scid).stop().animate({r: sradh}, this.ms, 'elastic');
    }).mouseout(function () {
      this.stop().animate({r: rad}, this.ms, 'elastic');
      this.paper.getById(this.scid).stop().animate({r: srad}, this.ms, 'elastic');
    }).click(function () {
      parentInst.getDataInfo(point);
      console.log('This is from big Circle.');
    });

    this.sc.mouseover(function () {
      this.stop().animate({r: sradh}, this.ms, 'elastic');
      this.paper.getById(this.cid).stop().animate({r: radh}, this.ms, 'elastic');
    }).mouseout(function () {
      this.stop().animate({r: srad}, this.ms, 'elastic');
      this.paper.getById(this.cid).stop().animate({r: rad}, this.ms, 'elastic');
    }).click(function () {
      parentInst.getDataInfo(point);
      console.log('This is from small circle');
    });

    this.p.mouseover(function () {
      this.paper.getById(this.scid).stop().animate({r: sradh}, this.ms, 'elastic');
      this.paper.getById(this.cid).stop().animate({r: radh}, this.ms, 'elastic');
    }).mouseout(function () {
      this.paper.getById(this.scid).stop().animate({r: srad}, this.ms, 'elastic');
      this.paper.getById(this.cid).stop().animate({r: rad}, this.ms, 'elastic');
    }).click(function () {
      parentInst.getDataInfo(point);
      console.log('This is from Text');
    });

    this.sp.mouseover(function () {
      this.paper.getById(this.scid).stop().animate({r: sradh}, this.ms, 'elastic');
      this.paper.getById(this.cid).stop().animate({r: radh}, this.ms, 'elastic');
    }).mouseout(function () {
      this.paper.getById(this.scid).stop().animate({r: srad}, this.ms, 'elastic');
      this.paper.getById(this.cid).stop().animate({r: rad}, this.ms, 'elastic');
    }).click(function () {
      parentInst.getDataInfo(point);
      console.log('This is from small Text ');
    });
  }

  getDataInfo(number: number) {
    console.log('Inside' + number);
    this.exclusiveService.getData(number);
  }
}
