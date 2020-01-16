import { Injectable } from '@angular/core';
import { User } from '../core/user-model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'; 
import { throwError } from 'rxjs/internal/observable/throwError';
import { Router } from '@angular/router';

const USER_TOKEN = 'AUTH_USER_TOKEN';
const USER_KEY = 'AUTH_USER_KEY';

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
                  localStorage.setItem(USER_KEY, 
                    JSON.stringify({
                      id: responce.id,
                      login: responce.login,
                      firstName: responce.name.firstName,
                      lastName: responce.name.lastName,
                      email: '',
                      password: responce.password,
                    }));
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
    localStorage.removeItem(USER_TOKEN);
  }

  getToken(): string {
    return localStorage.getItem(USER_TOKEN);
  }

  isAuthenticated() {
    return this.getToken() == null ? false : true;
  }

  getUserInfo() : User {
    return JSON.parse(localStorage.getItem(USER_KEY));
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
