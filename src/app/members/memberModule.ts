/**
 * Created by pechi on 11/4/2016.
 */


import { NgModule } from '@angular/core';
import { SumitaHttpService } from '../shared/sumita-http.service';
// import {editorModule} from "../tiny-mce-editor/editorModule";
import { MemberService } from './member.service';
import { MembersComponent } from './members.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberStartComponent } from './member-start.component';
import { MemberItemComponent } from './member-list/member-item.component';
import { RouterModule } from '@angular/router';
import { DataListModule, DialogModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MembersComponent,
    MemberListComponent,
    MemberEditComponent,
    MemberDetailComponent,
    MemberListComponent,
    MemberEditComponent,
    MemberStartComponent,
    MemberItemComponent,
  ],
  imports: [RouterModule, DataListModule, CommonModule, DialogModule],
  providers: [MemberService],
  exports: [MembersComponent]
})

export class MemberModule {
}
