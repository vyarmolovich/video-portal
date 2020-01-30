import { Injectable } from '@angular/core';
import { User } from '../core/user-model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'; 
import { throwError } from 'rxjs/internal/observable/throwError';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

const USER_TOKEN = 'AUTH_USER_TOKEN';

interface IUser {
  id: number;
  token: string;
  name: { firstName: string; lastName: string; };
  login: string;
  password: string;
}

interface IToken {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private redirectUrl : string = '/';
  
  private isAuthSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private userInfoSubject$: Subject<User> = new Subject();
  
  constructor(private http: HttpClient, private router: Router) {}

  login(user: User) {
    this.http
      .post<IToken>('http://localhost:3004/auth/login', { login: user.login, password: user.password })
      .pipe(
        tap((responce: IToken) => { 
            this.http
              .post<IUser>('http://localhost:3004/auth/userinfo', { token: responce.token })
              .pipe(
                tap((responce: IUser) => {
                  localStorage.setItem(USER_TOKEN, responce.token);
                  this.userInfoSubject$.next({
                    id: responce.id,
                    login: responce.login,
                    firstName: responce.name.firstName,
                    lastName: responce.name.lastName,
                    email: '',
                    password: responce.password,
                  });
                  this.isAuthSubject$.next(true);
                  this.router.navigate([this.getRedirectUrl()]);
                }
              ),
              catchError(this.handleError))
            .subscribe();           
          }),
        catchError(this.handleError))
      .subscribe();
  }

  logout() {
    this.isAuthSubject$.next(false);
  }

  getToken(): string {
    return localStorage.getItem(USER_TOKEN);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthSubject$.asObservable();
  }

  getUserInfo() : Observable<User> {
    return this.userInfoSubject$.asObservable();
  }

  setRedirectUrl(url: string) {
    this.redirectUrl = url;
  }

  getRedirectUrl() {
    return this.redirectUrl;
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred: ', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        'Backend returned code: ' + error.status + ' + body was: ' + error.error);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
