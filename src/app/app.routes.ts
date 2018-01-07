import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MembersComponent} from './members/members.component';
import {MEMBER_ROUTES} from './members/member.route';
import {ExclusiveComponent} from './exclusive/exclusive.component';
import {OfficeComponent} from './office/office.component';
import {EventsComponent} from './events/events.component';
import {NewsComponent} from './news/news.component';
import {CallbackComponent} from './callback/callback.component';
import {AwardsComponent} from './awards/awards.component';

const APP_ROUTES: Routes = [{path: '', component: HomeComponent},
  {path: 'members', component: MembersComponent, children: MEMBER_ROUTES},
  {path: 'membersE', component: MembersComponent, children: MEMBER_ROUTES},
  {path: 'news', component: NewsComponent},
  {path: 'exclusive', component: ExclusiveComponent},
  {path: 'office', component: OfficeComponent},
  {path: 'awards', component: AwardsComponent},
  {path: 'disease', component: EventsComponent, data: [{id: 4}]},
  {path: 'events', component: EventsComponent, data: [{id: 0}]},
  {path: 'ongoing', component: EventsComponent, data: [{id: 2}]},
  {path: 'upcoming', component: EventsComponent, data: [{id: 1}]},
  {path: 'callback', component: CallbackComponent},
  {path: 'events', component: EventsComponent}
];


export const routing = RouterModule.forRoot(APP_ROUTES);
