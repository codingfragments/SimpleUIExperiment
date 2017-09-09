import { Injectable } from '@angular/core';
import {register} from 'ts-node/dist';
import {LoggerCategory, LoggingService} from "../../../shared/services/logging.service";

export class WidgetRegistration {
  public constructor(readonly key: string, private widgetComponent: any) {

  }

}

@Injectable()
export class WidgetRegistrationService {
  LOGGER: LoggerCategory;

  private registry: Map<string, WidgetRegistration> = new Map();

  constructor( logSvc: LoggingService) {
    this.LOGGER = logSvc.createLogger('WidgetReg')
  }


  public registerType(registration: WidgetRegistration, key: string= registration.key) {
    this.LOGGER.info('register Type', registration);
    this.registry.set(key, registration);
  }

  public findType(key: string): WidgetRegistration {
    return this.registry.get(key);
  }

}
