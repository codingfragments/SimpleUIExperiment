import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';
import {NavEntry, NavConfig, NavTitle, NavSeparator} from '../../shared/api/routing-config';
import {DashboardMainComponent} from './pages/dashboard-main/dashboard-main.component';
import {DashboardStaticTestComponent} from './pages/dashboard-static-test/dashboard-static-test.component';
import {DashboardStaticFullComponent} from './pages/dashboard-static-full/dashboard-static-full.component';


export const dbNav = new NavConfig(true)
  .pushEntry(new NavEntry('Dashboards', './'))
  .pushEntry(new NavSeparator())
  .pushEntry(new NavEntry('Static Dashboard', './static/full'))
  .pushEntry(new NavEntry('Static Tests', './static/test'));

const routes: Routes = [
  {
    path: '',
    component: DashboardMainComponent,
    data: {
      title: 'Dashboard List',
      sideNav: dbNav
    }
  },
  {
    path: 'static/test',
    component: DashboardStaticTestComponent,
    data: {
      title: 'Home',
      sideNav: dbNav
    }
  },
  {
    path: 'static/full',
    component: DashboardStaticFullComponent,
    data: {
      title: 'Home',
      sideNav: dbNav
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
