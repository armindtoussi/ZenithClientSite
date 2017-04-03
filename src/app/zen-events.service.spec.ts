/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZenEventsService } from './zen-events.service';

describe('ZenEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZenEventsService]
    });
  });

  it('should ...', inject([ZenEventsService], (service: ZenEventsService) => {
    expect(service).toBeTruthy();
  }));
});
