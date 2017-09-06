import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CustomDashboardComponent } from './custom-dashboard/custom-dashboard.component';
import { CustomLayoutAbsolutComponent } from './custom-layout-absolut/custom-layout-absolut.component';
import { CustomTextWidgetComponent } from './custom-text-widget/custom-text-widget.component';
import { CustomLayoutAbsolutFrameComponent } from './custom-layout-absolut-frame/custom-layout-absolut-frame.component';
import { CustomDashboardContainerComponent } from './custom-dashboard-container/custom-dashboard-container.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [ DashboardComponent,
    CustomDashboardComponent,
    CustomLayoutAbsolutComponent,
    CustomTextWidgetComponent,
    CustomLayoutAbsolutFrameComponent,
    CustomDashboardContainerComponent,
  ]
})
export class DashboardModule { }
