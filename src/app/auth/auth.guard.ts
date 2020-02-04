import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { COURSES_PATH } from '../app-routing.module';
import { map } from 'rxjs/operators';
import { selectAuthState, State } from '../+state/app.state';
import { Store } from '@ngrx/store';
import { AuthState } from '../+state/reducers/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  state: Observable<AuthState>;

  constructor(private store: Store<State>, private router: Router) { 
    this.state = this.store.select(selectAuthState);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.state
          .pipe(
            map((state) => { 
              if(state.isAuthenticated) {
                return true;
              }

              this.router.navigate([COURSES_PATH.login]);
              return false; 
            }));  
  }
  
}
