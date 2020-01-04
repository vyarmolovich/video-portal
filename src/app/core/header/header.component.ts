import { Component } from '@angular/core';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public faUser = faUser;
  public faSignOutAlt = faSignOutAlt;
  public faSignInAlt = faSignInAlt;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  getUserName() {
    return this.authService.getUserInfo().firstName;
  }
}
