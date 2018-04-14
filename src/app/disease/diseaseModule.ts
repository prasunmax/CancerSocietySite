/**
 * Created by pechi on 11/4/2016.
 */


import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AccordionModule, DataGridModule, DialogModule, PanelModule, SharedModule} from 'primeng/primeng';
import {DiseaseComponent} from './disease.component';
import {DiseaseService} from './disease.service';

@NgModule({
  declarations: [DiseaseComponent],
  imports: [RouterModule, AccordionModule, CommonModule, SharedModule, DataGridModule, DialogModule, PanelModule],
  providers: [DiseaseService],
  exports: [DiseaseComponent]
})

export class DiseaseModule {
}
