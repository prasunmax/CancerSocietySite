/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NewsService} from './news.service';
import {NewsComponent} from './news.component';
import {CommonModule} from '@angular/common';
import {
  AccordionModule, DataGridModule, DialogModule, ScrollPanelModule, SharedModule,
  TabViewModule
} from 'primeng/primeng';

// import {editorModule} from "../tiny-mce-editor/editorModule";

@NgModule({
  declarations: [NewsComponent
  ],
  imports: [RouterModule, AccordionModule, CommonModule, SharedModule, DataGridModule, DialogModule, TabViewModule, ScrollPanelModule],
  providers: [NewsService],
  exports: [NewsComponent]
})

export class NewsModule {
}
