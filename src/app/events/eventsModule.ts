/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {EventsComponent} from './events.component';
import {EventsService} from './events.service';
import {DomHandler} from 'primeng/dom';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogService} from '../customDialog/dialog.service';
import {CustomDialogModule} from '../customDialog/custDialog';
import {NewHttpService} from '../shared/new-http.service';
import {DialogModule} from 'primeng/dialog';
import { SharedModule } from 'primeng/api';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';


@NgModule({
  declarations: [EventsComponent],
  imports: [RouterModule, CommonModule, SharedModule, DataViewModule, DialogModule, PanelModule, BrowserAnimationsModule,
    CustomDialogModule],
  providers: [NewHttpService, EventsService, DomHandler, DialogService],
  exports: [EventsComponent]
})

export class EventsModule {
}
