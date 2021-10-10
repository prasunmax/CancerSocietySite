/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NewsService} from './news.service';
import {NewsComponent} from './news.component';
import {CommonModule} from '@angular/common';

import {CustomDialogModule} from '../customDialog/custDialog';
import {AccordionModule} from 'primeng/accordion';
import {DialogModule} from 'primeng/dialog';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { SharedModule } from 'primeng/api';
import {DataViewModule} from 'primeng/dataview';
import {TabViewModule} from 'primeng/tabview';

// import {editorModule} from "../tiny-mce-editor/editorModule";

@NgModule({
  declarations: [NewsComponent],
  imports: [RouterModule, AccordionModule, CommonModule, SharedModule, DataViewModule, DialogModule, TabViewModule,
    ScrollPanelModule, CustomDialogModule],
  providers: [NewsService],
  exports: [NewsComponent]
})

export class NewsModule {
}
