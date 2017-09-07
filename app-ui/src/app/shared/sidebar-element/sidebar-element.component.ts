import {Component, OnInit, Input} from '@angular/core';
import {NavBaseObject} from '../api/routing-config';

@Component({
  selector: 'app-sidebar-element',
  templateUrl: './sidebar-element.component.html',
  styleUrls: ['./sidebar-element.component.scss']
})
export class SidebarElementComponent implements OnInit {

  constructor() { }

  @Input() navElement: NavBaseObject = null;


  ngOnInit() {
  }

}
