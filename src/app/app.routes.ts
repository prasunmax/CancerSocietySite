import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { MEMBER_ROUTES } from './members/member.route';
import { ExclusiveComponent } from './exclusive/exclusive.component';
import { OfficeComponent } from './office/office.component';
import { EventsComponent } from './events/events.component';

const APP_ROUTES: Routes = [{ path: '', component: HomeComponent },
{ path: 'members', component: MembersComponent, children: MEMBER_ROUTES },
{ path: 'exclusive', component: ExclusiveComponent },
{ path: 'office', component: OfficeComponent },
{ path: 'events', component: EventsComponent }
];


export const routing = RouterModule.forRoot(APP_ROUTES);
