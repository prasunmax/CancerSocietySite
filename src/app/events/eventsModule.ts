/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {SumitaHttpService} from '../shared/sumita-http.service';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AccordionModule, DataGridModule, DialogModule, PanelModule, SharedModule} from 'primeng/primeng';
import {EventsComponent} from './events.component';
import {EventsService} from './events.service';
import {SITEURL} from '../shared/globals';

@NgModule({
  declarations: [EventsComponent],
  imports: [RouterModule, AccordionModule, CommonModule, SharedModule, DataGridModule, DialogModule, PanelModule],
  providers: [SumitaHttpService, EventsService],
  exports: [EventsComponent]
})

export class EventsModule {
}
