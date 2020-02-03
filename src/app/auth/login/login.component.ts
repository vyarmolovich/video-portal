import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/user-model';
import { Observable } from 'rxjs';
import { State, selectAuthState } from 'src/app/+state/app.state';
import { Store } from '@ngrx/store';
import { LogIn } from 'src/app/+state/actions/auth.actions';

@Component({
  selector: 'vp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    id: 0, 
    login: '', 
    firstName: '', 
    lastName: '', 
    email: '', 
    password: ''};

  state: Observable<any>;

  errorMessage: string | null;

  constructor(private store: Store<State>) { 
    this.state = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.state.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  login() {
    this.store.dispatch(new LogIn(this.user));
  }

}
