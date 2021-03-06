import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerService } from '../server.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private serverService: ServerService, private route: Router) {}

  canLoad(
    route: import('@angular/router').Route,
    segments: import('@angular/router').UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.serverService.isUserLogin()) {
      this.route.navigateByUrl('/login');
    }
    return this.serverService.isUserLogin();
  }
}
