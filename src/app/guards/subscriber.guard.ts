import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AfService } from '../providers/af.service';
import { tap, map, take } from 'rxjs/operators';

export const SubscriberGuard: CanActivateFn = (route, state) => {
  const afService = inject(AfService); 

  return afService.user.pipe(
    take(1),
    map(user => (user?.roles?.subscriber ? true : false)),
    tap(isSubscriber => {
      if (!isSubscriber) {
        console.error("Access denied - Subscribers only allowed");
      }
    })
  );
};
