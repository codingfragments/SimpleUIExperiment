import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import {SimpleDecoratedComponent} from './layouts/simple-decorated/simple-decorated.component';
import {NavConfig, NavEntry} from './shared/api/routing-config';
import {Error4xxComponent} from './shared/pages/error4xx.component';
import {Error5xxComponent} from "./shared/pages/error5xx.component";

export const navs = new NavConfig(true)
  .pushEntry(new NavEntry('Home', '/home'))
  .pushEntry(new NavEntry('Dashboard', '/dashboard'));

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: {

    }
  },
  {
    path: '',
    component: SimpleDecoratedComponent,
    data: {
      title: 'Home',
      topNav: navs
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
        data: { title: 'Dashboard'}
      },
      {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule',
        data: { title: 'Home' }
      },
    ]
  },
  {
    path: 'error', component: SimpleDecoratedComponent,
    data: {
      title: 'Home',
      topNav: navs
    },
    children: [
      { path: '4xx', component: Error4xxComponent},
      { path: '5xx', component: Error5xxComponent},
    ]
  },
  { path: '**', redirectTo: 'error/4xx'}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
