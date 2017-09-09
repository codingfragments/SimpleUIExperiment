import { Component } from '@angular/core';
import {LoggerCategory, LoggingService} from './shared/services/logging.service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  LOGGER: LoggerCategory;

  public constructor(loggerSvc: LoggingService) {
    loggerSvc.jsonOutput = true;

    this.LOGGER = loggerSvc.createLogger('APP');
    this.LOGGER.debug('STARTED')
    this.LOGGER.trace(this);
  }

}
