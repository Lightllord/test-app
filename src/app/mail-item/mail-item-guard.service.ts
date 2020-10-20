import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MailItemService } from './mail-item.service';

@Injectable()
export class MailItemGuardService implements CanActivate {

  constructor(private mailItemService: MailItemService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const idString = route.paramMap.get('id');
    if (idString === 'new') {
      return !!this.mailItemService.createNew();
    } else {
      const id = +idString;
      if (id) {
        return !!this.mailItemService.findAndSelect(id);
      } else {
        return false;
      }
    }
  }
}
