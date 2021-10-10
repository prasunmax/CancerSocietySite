/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {ExclusiveComponent} from './exclusive.component';
import {ExclusiveService} from './exclusive.service';
import {NewHttpService} from '../shared/new-http.service';
import {AccordionModule} from 'primeng/accordion';
import {DialogModule} from 'primeng/dialog';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { SharedModule } from 'primeng/api';
import {DataViewModule} from 'primeng/dataview';
import {TabViewModule} from 'primeng/tabview';

// import {editorModule} from "../tiny-mce-editor/editorModule";

@NgModule({
  declarations: [ExclusiveComponent],
  imports: [RouterModule, AccordionModule, CommonModule, SharedModule, DataViewModule, DialogModule, TabViewModule, ScrollPanelModule],
  providers: [ExclusiveService, NewHttpService],
  exports: [ExclusiveComponent]
})

export class ExclusiveModule {
}
