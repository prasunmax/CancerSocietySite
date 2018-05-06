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
import {PrasunSidebarComponent} from './sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [PrasunSidebarComponent],
  imports: [RouterModule, CommonModule, SharedModule, DataGridModule, DialogModule,
    TabViewModule, ScrollPanelModule, BrowserAnimationsModule],
  providers: [],
  exports: [PrasunSidebarComponent]
})

export class PrasunSideBarModule {
}
