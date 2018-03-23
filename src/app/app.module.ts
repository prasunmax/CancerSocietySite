import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MemberModule} from './members/memberModule';
import {
  AccordionModule,
  GalleriaModule,
  MenubarModule,
  MenuModule,
  PanelMenuModule,
  SharedModule, SidebarModule
} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing} from './app.routes';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {OfficeComponent} from './office/office.component';
import {MenuComponent} from './menu/menu.component';

import {MemberService} from './members/member.service';
import {MenuService} from './menu/menu.service';
import {NewsModule} from './news/newsModule';
import {DiseaseModule} from './disease/diseaseModule';
import {ExclusiveModule} from './exclusive/exclusiveModule';
import {CallbackComponent} from './callback/callback.component';
import {AuthService} from './auth/auth.service';
import {AwardsModule} from './awards/awardsModule';
import {EventsModule} from './events/eventsModule';
import {OfficeModule} from './office/officeModule';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MenubarModule,
    GalleriaModule,
    routing,
    RouterModule,
    MenuModule,
    MemberModule,
    PanelMenuModule,
    AccordionModule,
    SharedModule,
    NewsModule,
    DiseaseModule,
    ExclusiveModule,
    EventsModule,
    AwardsModule,
    OfficeModule,
    SidebarModule,
    BrowserAnimationsModule
  ],
  providers: [MenuService, MemberService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
