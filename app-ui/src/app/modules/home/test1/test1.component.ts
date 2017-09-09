import { Component, OnInit } from '@angular/core';
import {TaskLogger} from "protractor/built/taskLogger";
import {LoggerCategory, LoggingService} from "../../../shared/services/logging.service";

@Component({
  selector: 'app-test-1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@Component({
  selector: 'app-test-2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test2Component implements OnInit {
  LOGGER: LoggerCategory;

  constructor(private log: LoggingService) {
    this.LOGGER = log.createLogger('TEST');
  }

  ngOnInit() {
  }

  test() {
    this.LOGGER.debug('TEST');

  }

}
