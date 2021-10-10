/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {DiseaseComponent} from './disease.component';
import {DiseaseService} from './disease.service';
import {PanelModule} from 'primeng/panel';
import {AccordionModule} from 'primeng/accordion';
import {DialogModule} from 'primeng/dialog';
import { SharedModule } from 'primeng/api';
import {DataViewModule} from 'primeng/dataview';


@NgModule({
  declarations: [DiseaseComponent],
  imports: [RouterModule, AccordionModule, CommonModule, SharedModule, DataViewModule, DialogModule, PanelModule],
  providers: [DiseaseService],
  exports: [DiseaseComponent]
})

export class DiseaseModule {
}
