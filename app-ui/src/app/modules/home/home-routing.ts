import { NgModule } from '@angular/core';
import { Routes,
  RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {NavEntry, NavConfig} from '../../shared/api/routing-config';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home2',
      sideNav: new NavConfig(true)
        .pushEntry(new NavEntry('Home', '/home'))
        .pushEntry(new NavEntry('Dashboard', '/dashboard/custom'))

    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
