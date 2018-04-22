/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {
  DataGridModule, DialogModule, ScrollPanelModule, SharedModule,
  TabViewModule
} from 'primeng/primeng';
import {PrasunDialogComponent} from '../customDialog/prasun-dialog';
import {DialogService} from './dialog.service';

// import {editorModule} from "../tiny-mce-editor/editorModule";

@NgModule({
  declarations: [PrasunDialogComponent],
  imports: [RouterModule, CommonModule, SharedModule, DataGridModule, DialogModule, TabViewModule, ScrollPanelModule],
  providers: [DialogService],
  exports: [PrasunDialogComponent]
})

export class CustomDialogModule {
}
