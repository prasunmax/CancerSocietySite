import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MemberModule } from './members/memberModule';
import {
  ConfirmationService,
  ConfirmDialogModule,
  ButtonModule,
  InputTextModule,
  MenubarModule,
  ProgressBarModule,
  GalleriaModule,
  PanelMenuModule
} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { OfficeComponent } from './office/office.component';
import { ExclusiveComponent } from './exclusive/exclusive.component';
import { MenuComponent } from './menu/menu.component';

import { MemberService } from './members/member.service';
import { MenuService } from './menu/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    EventsComponent,
    OfficeComponent,
    ExclusiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MenubarModule,
    GalleriaModule,
    routing,
    RouterModule,
    MemberModule,
    PanelMenuModule,
    BrowserAnimationsModule
  ],
  providers: [MenuService, MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
