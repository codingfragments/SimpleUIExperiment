import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import {SimpleDecoratedComponent} from './layouts/simple-decorated/simple-decorated.component';
import {NavConfig, NavEntry} from './shared/api/routing-config';

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
      topNav: new NavConfig(true)
          .pushEntry(new NavEntry('Home', '/home'))
          .pushEntry(new NavEntry('Dashboard', '/dashboard/custom'))


    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        data: { title: 'Dashboard',
                tt: 'lkl',
          t2: 'ss'}
      },
      {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule',
        data: { title: 'Home' }
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
