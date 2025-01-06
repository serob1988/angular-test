import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { SubscriberGuard } from './subscriber.guard';

describe('subscriberGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => SubscriberGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
