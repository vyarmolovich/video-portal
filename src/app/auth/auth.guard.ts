import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { COURSES_PATH } from '../app-routing.module';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.authService.isAuthenticated()
              .pipe(
                tap((isAuth: boolean) => { 
                  if(isAuth) {
                    return true;
                  }
                  this.authService.setRedirectUrl(state.url == null ? COURSES_PATH.courses : state.url);

                  this.router.navigate([COURSES_PATH.login]);
                  return false;                
                })
              );
  }
  
}
