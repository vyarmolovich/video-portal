import { Injectable } from '@angular/core';
import { User } from '../core/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: User = null;
  
  constructor() { }

  login(user: User) {
    if (!this.isAuthenticated(user)) {
      this.currentUser = user;
    }
    console.log("Log " + user  + " current: " + JSON.stringify(this.currentUser));
  }

  logout(user: User) {
    console.log("User " + this.currentUser.firstName + " is logged out.");
    this.currentUser = null;
  }

  isAuthenticated(user: User) {
    console.log("isAuthenticated " + JSON.stringify(user) + " current: " + JSON.stringify(this.currentUser));
    return this.currentUser != null && this.currentUser === user;
  }

  getUserInfo() {
    console.log("getUserInfo " + this.currentUser);
    return this.currentUser;
  }
}
