import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';

import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure } from '../actions/auth.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';

const USER_TOKEN = 'AUTH_USER_TOKEN';
  
@Injectable()
export class AuthEffects {
  
    constructor(
      private actions: Actions,
      private authService: AuthService,
      private router: Router,
    ) {}
  
    @Effect()
    LogIn: Observable<any> = this.actions.pipe(
      ofType(AuthActionTypes.LOGIN),
      map((action: LogIn) => action.payload),
      switchMap(payload => {
        return this.authService.login(payload).pipe(
            tap((token) => {
                localStorage.setItem(USER_TOKEN, token);
                this.router.navigateByUrl('/'); 
            }),
            switchMap(token => {
                return this.authService.userinfo(token).pipe(
                    map((user) => {
                        return new LogInSuccess(user);
                    }),
                    catchError(((error) => {
                        console.log(error);
                        return of(new LogInFailure({ error: error }));
                    })))
            }),
            catchError(((error) => {
                console.log(error);
                return of(new LogInFailure({ error: error }));
            })))
      })
    );
  
    @Effect({ dispatch: false })
    LogInSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS)
    );
  
    @Effect({ dispatch: false })
    LogInFailure: Observable<any> = this.actions.pipe(
      ofType(AuthActionTypes.LOGIN_FAILURE)
    );
  
    @Effect({ dispatch: false })
    LogOut: Observable<any> = this.actions.pipe(
      ofType(AuthActionTypes.LOGOUT),
      tap((user) => {
        localStorage.removeItem(USER_TOKEN);
      })
    );
  
  }