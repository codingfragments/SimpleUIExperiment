import { Component, OnInit } from '@angular/core';
import {DashboardConfig} from '../api/dashboard-config';

@Component({
  selector: 'app-custom-dashboard',
  templateUrl: './custom-dashboard.component.html',
  styleUrls: ['./custom-dashboard.component.scss']
})
export class CustomDashboardComponent implements OnInit {

  constructor() { }

  public createDashboardConfig(): DashboardConfig {
    const db = new DashboardConfig('myTestDb');

    return db;
  }
  ngOnInit() {
  }

}
