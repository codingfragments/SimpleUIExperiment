import { TestBed, inject } from '@angular/core/testing';

import { WidgetRegistrationService } from './widget-registration.service';

describe('WidgetRegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetRegistrationService]
    });
  });

  it('should be created', inject([WidgetRegistrationService], (service: WidgetRegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
