import { Component, OnInit } from '@angular/core';
import {GridsterConfig} from 'angular-gridster2';
import {GridsterConfigService} from 'angular-gridster2/dist/gridsterConfig.constant';

@Component({
  selector: 'page-dashboard-static-test',
  templateUrl: './dashboard-static-test.component.html',
  styleUrls: ['./dashboard-static-test.component.scss']
})
export class DashboardStaticTestComponent implements OnInit {

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }


  public options: GridsterConfig = GridsterConfigService;

  public dashboard = [{ x: 1, y: 1, w: 1, h: 1},
    { x: 1, y: 2, w: 2, h: 1}]


  ngOnInit() {
    this.options.resizable.enabled = true;
    this.options.minCols = 5;
    this.options.minRows = 3;
    this.options.draggable.enabled = true;
    this.options.pushItems = true;
    this.options.pushResizeItems = true;
    this.options.margin = 5;
 //   this.options.gridType = 'scrollVertical';

  }
}


