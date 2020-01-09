import { Component } from '@angular/core';
import { User } from 'src/app/core/user-model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'vp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = {
    id: 0, 
    login: '', 
    firstName: '', 
    lastName: '', 
    email: '', 
    password: ''};

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.user);
  }
}
