import {Galleria} from 'primeng/primeng';
import {Component, ElementRef} from '@angular/core';


@Component({
  selector: 'prasun-galleria',
  templateUrl: './galleria.html',
})
export class HomeGalleriaComponent extends Galleria {
  private domHandler: any;
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
}
