/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {DataGridModule, DialogModule, PanelModule, SharedModule} from 'primeng/primeng';
import {EventsComponent} from './events.component';
import {EventsService} from './events.service';
import {DomHandler} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogService} from '../customDialog/dialog.service';
import {CustomDialogModule} from '../customDialog/custDialog';
import {NewHttpService} from '../shared/new-http.service';

@NgModule({
  declarations: [EventsComponent],
  imports: [RouterModule, CommonModule, SharedModule, DataGridModule, DialogModule, PanelModule, BrowserAnimationsModule,
    CustomDialogModule],
  providers: [NewHttpService, EventsService, DomHandler, DialogService],
  exports: [EventsComponent]
})

export class EventsModule {
}
