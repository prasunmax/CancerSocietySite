/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {OfficeComponent} from './office.component';
import {OfficeService} from './office.service';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {NewHttpService} from '../shared/new-http.service';
import { SharedModule } from 'primeng/api';
import {ScrollPanelModule} from 'primeng/scrollpanel';

// import {editorModule} from "../tiny-mce-editor/editorModule";

@NgModule({
  declarations: [OfficeComponent],
  imports: [RouterModule, CommonModule, SharedModule, DataViewModule, PanelModule, ScrollPanelModule],
  providers: [NewHttpService, OfficeService],
  exports: [OfficeComponent]
})

export class OfficeModule {
}
