import { APP_PERMISSION_TODO_ADMIN_API_KEY } from '../../../../app.const';
import { CanActivate } from '@angular/router';
import { InitService } from '../init/init.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AdminPermissionRouteGuardService implements CanActivate {

  private initService: InitService;

  constructor(initService: InitService) {
    this.initService = initService;
  }

  public canActivate(): Observable<boolean> {

    return this.initService.getPermissions()
      .catch(() => {
        return of(false);
      })
      .flatMap((permissions) => {
        return of(permissions[APP_PERMISSION_TODO_ADMIN_API_KEY]);
      });

  }

}
