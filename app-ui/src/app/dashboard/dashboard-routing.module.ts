import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {CustomDashboardComponent} from './custom-dashboard/custom-dashboard.component';
import {NavConfig, NavEntry, NavSeparator, NavTitle} from "../shared/api/routing-config";


export const homeNav = new NavConfig(true)
  .pushEntry(new NavTitle('Titel1', '', 'icon-speedometer'))
  .pushEntry(new NavEntry('Title 2', '/test/404', 'icon-user')
    .addBadge('badge-pill badge-info', '34'))
  .pushEntry(new NavSeparator())
  .pushEntry(new NavTitle('Titel1', '', 'icon-speedometer'))
  .pushEntry(new NavEntry('Master', '/404/77', 'icon-user')
    .pushEntry(new NavEntry('Test1', '/404/test'))
    .pushEntry(new NavEntry('Test2', '/404/test')));


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
       sideNav: homeNav
     }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
