import {Component, Input, OnInit} from '@angular/core';
import {DashboardContainer} from '../api/dashboard-interfaces';
import {DashboardConfig} from '../api/dashboard-config';

// noinspection TsLint
// noinspection TsLint
@Component({
  selector: 'app-dashboard-container',
  templateUrl: './custom-dashboard-container.component.html',
  styleUrls: ['./custom-dashboard-container.component.scss']
})
export class CustomDashboardContainerComponent
  extends DashboardContainer
  implements OnInit {


  @Input() dashboardConfig: DashboardConfig;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
