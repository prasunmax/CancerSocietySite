/**
 * Created by pechi on 11/4/2016.
 */


import { NgModule } from '@angular/core';
import { MemberService } from './member.service';
import { MembersComponent } from './members.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberStartComponent } from './member-start.component';
import { MemberItemComponent } from './member-list/member-item.component';
import { RouterModule } from '@angular/router';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

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
  imports: [RouterModule, DataViewModule, CommonModule, DialogModule],
  providers: [MemberService],
  exports: [MembersComponent]
})

export class MemberModule {
}
