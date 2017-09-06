import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import {SimpleDecoratedComponent} from "./layouts/simple-decorated/simple-decorated.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/custom',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SimpleDecoratedComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
