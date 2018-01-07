/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {SumitaHttpService} from '../shared/sumita-http.service';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AccordionModule, CarouselModule, DataGridModule, GrowlModule, SharedModule} from 'primeng/primeng';
import {AwardsComponent} from './awards.component';

@NgModule({
  declarations: [AwardsComponent],
  imports: [RouterModule, AccordionModule, CommonModule, SharedModule, DataGridModule, CarouselModule, GrowlModule],
  providers: [SumitaHttpService],
  exports: [AwardsComponent]
})

export class AwardsModule {
}
