import { Injectable } from '@angular/core';
import { User } from '../core/user-model';

const USER_KEY = 'AUTH_USER_KEY';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  login(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  logout(user: User) {
    localStorage.setItem(USER_KEY, null);
  }

  isAuthenticated(user: User) {
    return localStorage.getItem(USER_KEY) === JSON.stringify(user);
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem(USER_KEY));;
  }
}
