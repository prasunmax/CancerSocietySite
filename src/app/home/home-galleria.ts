
import {Component, ElementRef} from '@angular/core';
import { Galleria } from 'primeng/galleria';



@Component({
  selector: 'prasun-galleria',
  templateUrl: './galleria.html',
})
export class HomeGalleriaComponent extends Galleria {
  private domHandler: any;
  panels: any;
  showFilmstrip: any;
  frames: any;
  stripWrapper: any;
  frameHeight: string;
  showCaption: any;
  caption: any;
  style:any;
  styleClass:any;
  public panelWidth: any;
  public panelHeight: any;
  images: any[];
  width = 500;
  height = 500;
  private maxWidth = 500;
  display = false;
  dlgTxt = '';
  imgSrc = '';


  render() {
    this.panels = this.domHandler.find(this.panelWrapper, 'li.ui-galleria-panel');
    if (this.showFilmstrip) {
      this.frames = this.domHandler.find(this.strip, 'li.ui-galleria-frame');
      this.stripWrapper.style.width = this.domHandler.width(this.panelWrapper) - 50 + 'px';
      this.stripWrapper.style.height = this.frameHeight + 'px';
    }
    if (this.showCaption) {
      this.caption = this.domHandler.findSingle(this.container, 'div.ui-galleria-caption');
      if (this.caption) {
        this.caption.style.bottom = this.showFilmstrip ? this.domHandler.getOuterHeight(this.stripWrapper, true) + 'px' : 0 + 'px';
        this.caption.style.width = this.domHandler.width(this.panelWrapper) + 'px';
        if (this.caption.style.height > this.domHandler.width(this.panelWrapper) / 2 + 'px') {
          this.caption.style.height = this.domHandler.width(this.panelWrapper) / 2 + 'px';
        }
      }
    }
    if (this.autoPlay) {
      this.startSlideshow();
    }
    this.container.style.visibility = 'visible';
  }
  panelWrapper(panelWrapper: any, arg1: string): any {
    throw new Error('Method not implemented.');
  }
  strip(strip: any, arg1: string): any {
    throw new Error('Method not implemented.');
  }
  container(container: any, arg1: string): any {
    throw new Error('Method not implemented.');
  }
  startSlideshow() {
    throw new Error('Method not implemented.');
  }
}
