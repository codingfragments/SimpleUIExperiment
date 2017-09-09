import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'widget-lorem-ipsum',
  templateUrl: './lorem-ipsum-widget.component.html',
  styleUrls: ['./lorem-ipsum-widget.component.scss']
})
export class LoremIpsumWidgetComponent implements OnInit {

  constructor() { }

  @Input() txt = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
  magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
  elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
  et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
  sit amet.`

  ngOnInit() {
  }

}
