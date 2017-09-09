import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-dashboard-static-test',
  templateUrl: './dashboard-static-test.component.html',
  styleUrls: ['./dashboard-static-test.component.scss']
})
export class DashboardStaticTestComponent implements OnInit {

  public gridsterOptions = {
    lanes: 5, // how many lines (grid cells) dashboard has
    direction: 'vertical', // items floating direction: vertical/horizontal
    dragAndDrop: true, // possible to change items position by drag n drop
    resizable: true, // possible to resize items by drag n drop by item edge/corner
    widthHeightRatio: 2,
    responsiveView: true
  };

  public widgets = [{ x: 1, y: 1, w: 1, h: 1},
    { x: 1, y: 2, w: 1, h: 1}]

  constructor() { }

  ngOnInit() {
  }

}
