/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {PrasunDialogComponent} from '../customDialog/prasun-dialog';
import {DialogService} from './dialog.service';
import { SharedModule } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DataViewModule } from 'primeng/dataview';


// import {editorModule} from "../tiny-mce-editor/editorModule";

@NgModule({
  declarations: [PrasunDialogComponent],
  imports: [RouterModule, CommonModule, SharedModule, DataViewModule, DialogModule, TabViewModule, ScrollPanelModule],
  providers: [DialogService],
  exports: [PrasunDialogComponent]
})

export class CustomDialogModule {
}
