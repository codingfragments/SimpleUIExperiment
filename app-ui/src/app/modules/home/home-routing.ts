import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {NavEntry, NavConfig, NavTitle, NavSeparator} from '../../shared/api/routing-config';
import {Test1Component, Test2Component} from './test1/test1.component';

export const homeNav = new NavConfig(true)
  .pushEntry(new NavEntry('Home', '.', 'icon-user')
    .addBadge('badge-pill badge-info', '34'))
  .pushEntry(new NavSeparator())
  .pushEntry(new NavEntry('CoreUI Tests', '', 'icon-user')
    .pushEntry(new NavEntry('Test1', 'test1'))
    .pushEntry(new NavEntry('Test2', 'test2')));

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
      sideNav: homeNav
    }
  },
  {
    path: 'test1',
    component: Test1Component,
    data: {
      title: 'Home',
      sideNav: homeNav
    }
  },
  {
    path: 'test2',
    component: Test2Component,
    data: {
      title: 'Home',
      sideNav: homeNav
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
