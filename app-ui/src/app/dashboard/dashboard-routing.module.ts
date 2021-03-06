import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {CustomDashboardComponent} from './custom-dashboard/custom-dashboard.component';
import {NavConfig, NavEntry, NavSeparator, NavTitle} from '../shared/api/routing-config';





const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }
  },
  {
    path: 'custom',
    component: CustomDashboardComponent,
     data: {
       t2: 'CustomTest',
     }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
