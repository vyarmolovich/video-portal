import { Injectable } from '@angular/core';
import { User } from '../core/user-model';

const USER_KEY = 'AUTH_USER_KEY';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private redirectUrl : string = '/';
  
  login(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(USER_KEY);
  }

  isAuthenticated() {
    return localStorage.getItem(USER_KEY) == null ? false : true;
  }

  getUserInfo() : User {
    return JSON.parse(localStorage.getItem(USER_KEY));;
  }

  setRedirectUrl(url: string) {
    this.redirectUrl = url;
  }

  getRedirectUrl() {
    return this.redirectUrl;
  }
}
