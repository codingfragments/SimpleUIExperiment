import { Injectable } from '@angular/core';
import {register} from 'ts-node/dist';

export class WidgetRegistration {
  public constructor(readonly key: string, private widgetComponent: any) {

  }

}

@Injectable()
export class WidgetRegistrationService {

  private registry: Map<string, WidgetRegistration> = new Map();

  constructor() { }


  public registerType(registration: WidgetRegistration, key: string= registration.key) {
    this.registry.set(key, registration);
  }

  public findType(key: string): WidgetRegistration {
    return this.registry.get(key);
  }

}
