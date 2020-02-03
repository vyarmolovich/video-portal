import { Injectable } from '@angular/core';
import { User } from '../core/user-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs';

const USER_TOKEN = 'AUTH_USER_TOKEN';
const BASE_URL = 'http://localhost:3004/auth';

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
  
  constructor(private http: HttpClient) {}

  login(user: User): Observable<string> {
    return this.http
      .post<IToken>(BASE_URL + '/login', { login: user.login, password: user.password })
      .pipe(
        map((responce: IToken) => responce.token));
  }

  userinfo(token: string): Observable<User> {
    return this.http
        .post<IUser>(BASE_URL + '/userinfo', { token: token })
        .pipe(
          map((responce: IUser) => {
            return {
                  id: responce.id,
                  login: responce.login,
                  firstName: responce.name.firstName,
                  lastName: responce.name.lastName,
                  email: '',
                  password: responce.password }})); 
  }

  getToken(): string {
    return localStorage.getItem(USER_TOKEN);
  }
}
