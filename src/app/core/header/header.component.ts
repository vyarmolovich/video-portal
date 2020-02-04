import { Component, OnInit, OnDestroy } from '@angular/core';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { COURSES_PATH } from 'src/app/app-routing.module';
import { Observable } from 'rxjs';
import { User } from '../user-model';
import { selectAuthState, State } from 'src/app/+state/app.state';
import { Store } from '@ngrx/store';
import { LogOut } from 'src/app/+state/actions/auth.actions';

@Component({
  selector: 'vp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public faUser = faUser;
  public faSignOutAlt = faSignOutAlt;
  public faSignInAlt = faSignInAlt;

  public user: User;
  public isAuth: boolean;

  state: Observable<any>;

  constructor(private store: Store<State>, private router: Router) { 
    this.state = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.state.subscribe((state) => {
      this.user = state.user;
      this.isAuth = state.isAuthenticated;
    });
  }

  login() {
    this.router.navigate([COURSES_PATH.login]);
  }

  logout() {
    this.store.dispatch(new LogOut());
    this.router.navigate([COURSES_PATH.login]);
  }

  isAuthenticated()  {
    return this.isAuth;
  }
}
