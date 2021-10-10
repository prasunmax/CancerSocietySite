/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {PrasunSidebarComponent} from './sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
import {DataViewModule} from 'primeng/dataview';


@NgModule({
  declarations: [PrasunSidebarComponent],
  imports: [RouterModule, CommonModule, SharedModule, DataViewModule, DialogModule,
    TabViewModule, ScrollPanelModule, BrowserAnimationsModule],
  providers: [],
  exports: [PrasunSidebarComponent]
})

export class PrasunSideBarModule {
}
