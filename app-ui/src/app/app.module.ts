import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { HomeModule } from './modules/home/home.module';
import { SimpleDecoratedComponent } from './layouts/simple-decorated/simple-decorated.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarElementComponent } from './shared/sidebar-element/sidebar-element.component';
import { Error5xxComponent } from './shared/pages/error5xx.component';
import { Error4xxComponent } from './shared/pages/error4xx.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import {LoggerCategory, LoggingService} from './shared/services/logging.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HomeModule,
    DashboardModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    SimpleDecoratedComponent,
    FooterComponent,
    SidebarElementComponent,
    Error5xxComponent,
    Error4xxComponent,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
    // useClass: PathLocationStrategy
  }, LoggingService],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
