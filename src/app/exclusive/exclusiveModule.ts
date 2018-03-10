/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {SumitaHttpService} from '../shared/sumita-http.service';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {
  AccordionModule, DataGridModule, DialogModule, ScrollPanelModule, SharedModule,
  TabViewModule
} from 'primeng/primeng';
import {ExclusiveComponent} from './exclusive.component';
import {ExclusiveService} from './exclusive.service';

// import {editorModule} from "../tiny-mce-editor/editorModule";

@NgModule({
  declarations: [ExclusiveComponent
  ],
  imports: [RouterModule, AccordionModule, CommonModule, SharedModule, DataGridModule, DialogModule, TabViewModule, ScrollPanelModule],
  providers: [SumitaHttpService, ExclusiveService],
  exports: [ExclusiveComponent]
})

export class ExclusiveModule {
}
