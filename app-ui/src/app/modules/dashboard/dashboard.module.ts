import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './pages/dashboard-main/dashboard-main.component';
import { DashboardStaticTestComponent } from './pages/dashboard-static-test/dashboard-static-test.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { LoremIpsumWidgetComponent } from './test-widgets/lorem-ipsum-widget/lorem-ipsum-widget.component';
import {GridsterComponent, GridsterModule} from 'angular2gridster';

@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardMainComponent, DashboardStaticTestComponent, LoremIpsumWidgetComponent]
})
export class DashboardModule { }
