import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AfService } from '../providers/af.service';
import { tap, map, take } from 'rxjs/operators';

export const AdminGuard: CanActivateFn = (route, state) => {
  const afService = inject(AfService);

  return afService.user.pipe(
    take(1),
    map(user => (user?.roles?.admin ? true : false)),
    tap(isAdmin => {
      if (!isAdmin) {
        console.error("Access denied - Admins only allowed");
      }
    })
  );
};
