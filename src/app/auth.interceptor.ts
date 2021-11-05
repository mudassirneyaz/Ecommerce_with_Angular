import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loggedInToken = this.auth.loggedInUserToken;
    if(loggedInToken){
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${loggedInToken}`


        }
      })
    }
    return next.handle(request);
  }
}
