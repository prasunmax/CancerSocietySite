/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {EventsService} from '../events/events.service';
import {HomeGalleriaComponent} from './home-galleria';
import {DomHandler} from 'primeng/dom';
import {NewHttpService} from '../shared/new-http.service';
import {GalleriaModule} from 'primeng/galleria';
import { SharedModule } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {DataViewModule} from 'primeng/dataview';

// import {editorModule} from "../tiny-mce-editor/editorModule";

@NgModule({
  declarations: [HomeComponent, HomeGalleriaComponent
  ],
  imports: [RouterModule, GalleriaModule, CommonModule, SharedModule, DataViewModule, DialogModule],
  providers: [NewHttpService, EventsService, DomHandler],
  exports: [HomeComponent]
})

export class HomeModule {
}
