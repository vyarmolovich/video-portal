import { Component } from '@angular/core';
import { User } from 'src/app/core/user-model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private user: User = {id: 1, firstName: 'Vasya', lastName: 'Pupkin', email: 'vaspup@gmail.com', password: 'secret123'};

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.user);
    this.router.navigate([this.authService.getRedirectUrl()]);
  }
}
