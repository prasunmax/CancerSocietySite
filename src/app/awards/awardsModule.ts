/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ToastModule} from 'primeng/toast';
import {AwardsComponent} from './awards.component';
import {NewHttpService} from '../shared/new-http.service';
import {AccordionModule} from 'primeng/accordion';
import { SharedModule } from 'primeng/api';
import {DataViewModule} from 'primeng/dataview';
import {CarouselModule} from 'primeng/carousel';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [AwardsComponent],
  imports: [RouterModule, AccordionModule, MessagesModule, MessageModule, CommonModule, SharedModule, DataViewModule, CarouselModule, ToastModule],
  providers: [NewHttpService],
  exports: [AwardsComponent]
})

export class AwardsModule {
}
