import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MemberModule} from './members/memberModule';

import {AccordionModule} from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SidebarModule} from 'primeng/sidebar';
import {GalleriaModule} from 'primeng/galleria';
import { SharedModule } from 'primeng/api';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing} from './app.routes';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
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
import {HomeModule} from './home/homeModule';
import {HttpClientModule} from '@angular/common/http';
import {PrasunSideBarModule} from './sidebar/sidebar';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
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
    PrasunSideBarModule,
    AwardsModule,
    OfficeModule,
    HomeModule,
    SidebarModule,
    BrowserAnimationsModule
  ],
  providers: [MenuService, MemberService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
