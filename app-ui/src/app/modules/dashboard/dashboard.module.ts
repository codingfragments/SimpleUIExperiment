import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './pages/dashboard-main/dashboard-main.component';
import { DashboardStaticTestComponent } from './pages/dashboard-static-test/dashboard-static-test.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { LoremIpsumWidgetComponent } from './test-widgets/lorem-ipsum-widget/lorem-ipsum-widget.component';
import {GridsterModule} from 'angular-gridster2';
import { DashboardStaticFullComponent } from './pages/dashboard-static-full/dashboard-static-full.component';
import { DashboardContainerComponent } from './widgets/container/dashboard-container.component';
import { GridContainerLayoutComponent } from './widgets/layout/grid-container-layout.component';
import {WidgetRegistration, WidgetRegistrationService} from './services/widget-registration.service';
import { DashboardWidgetWrapperComponent } from './widgets/util/dashboard-widget-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardMainComponent, DashboardStaticTestComponent,
    LoremIpsumWidgetComponent, DashboardStaticFullComponent,
    DashboardContainerComponent, GridContainerLayoutComponent,
    DashboardWidgetWrapperComponent],
  providers: [WidgetRegistrationService]
})
export class DashboardModule {
  constructor( private widgetRegistration: WidgetRegistrationService) {
    widgetRegistration.registerType(new WidgetRegistration('lorem', LoremIpsumWidgetComponent));
  }
}
