import { Component, OnInit, OnDestroy } from '@angular/core';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { COURSES_PATH } from 'src/app/app-routing.module';
import { Observable, Subscription } from 'rxjs';
import { User } from '../user-model';

@Component({
  selector: 'vp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public faUser = faUser;
  public faSignOutAlt = faSignOutAlt;
  public faSignInAlt = faSignInAlt;

  public userLogin = '';

  subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.authService.getUserInfo().subscribe(
        (user: User) => this.userLogin = user.login
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  login() {
    this.router.navigate([COURSES_PATH.login]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate([COURSES_PATH.login]);
  }

  isAuthenticated(): Observable<boolean>  {
    return this.authService.isAuthenticated();
  }

  getUserName(): Observable<User> {
    return this.authService.getUserInfo();
  }
}
