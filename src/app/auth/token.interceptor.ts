import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
    if (this.authService.isAuthenticated()) {
        request = request.clone({
            setHeaders: {
                Authorization: this.authService.getToken()
            }
        });
    }

    return next.handle(request);
  }
}