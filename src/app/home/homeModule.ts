/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {
  DataGridModule, DialogModule, GalleriaModule, SharedModule
} from 'primeng/primeng';
import {HomeComponent} from './home.component';
import {EventsService} from '../events/events.service';
import {HomeGalleriaComponent} from './home-galleria';
import {DomHandler} from 'primeng/api';
import {NewHttpService} from '../shared/new-http.service';

// import {editorModule} from "../tiny-mce-editor/editorModule";

@NgModule({
  declarations: [HomeComponent, HomeGalleriaComponent
  ],
  imports: [RouterModule, GalleriaModule, CommonModule, SharedModule, DataGridModule, DialogModule],
  providers: [NewHttpService, EventsService, DomHandler],
  exports: [HomeComponent]
})

export class HomeModule {
}
