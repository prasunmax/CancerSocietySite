import { Routes } from '@angular/router';

import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberStartComponent } from './member-start.component';
import { MemberEditComponent } from './member-edit/member-edit.component';

export const MEMBER_ROUTES: Routes = [
  { path: '', component: MemberStartComponent },
  { path: 'new', component: MemberEditComponent },
  { path: ':id', component: MemberDetailComponent },
  { path: ':id/edit', component: MemberEditComponent }
];
