import { Component, OnInit } from '@angular/core';
import { User } from '../user-model';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'vp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public faUser = faUser;
  public faSignOutAlt = faSignOutAlt;

  public user: User = {id: 1, firstName: 'Vasya', lastName: 'Pupkin', email: 'vaspup@gmail.com', password: 'secret123'};

  public isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.login(this.user);
    this.isAuth = this.authService.isAuthenticated(this.user);
  }

  logout() {
    this.authService.logout(this.user);
  }
}
