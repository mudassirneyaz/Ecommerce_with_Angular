import { Injectable } from '@angular/core';
import { HttpRequest, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor(private admin: AdminService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    //let token = "Bearer "+ localStorage.getItem("adminToken");
    const token = localStorage.getItem("accessToken") ? (localStorage.getItem("accessToken")):'';
    let noToken = localStorage.getItem("noToken") ? (localStorage.getItem("noToken")) : '';
    if (token) {
      req = req.clone({ headers: req.headers.set("authorization", "Bearer " + token) });
    }

    if (this.admin.showLoader)
      this.admin.loader(true);
    else
      this.admin.showLoader = true;

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.admin.loader(false);
      }
    },
      (err: any) => {
        this.admin.loader(false);
        if (err instanceof HttpErrorResponse) {
            if (err.error.statusCode == 401)
              this.admin.errorAlert(err.error.message, true);
            // else
            //   if (err.error.statusCode == 402)
            //     this.admin.errorAlert(err.error.message, true);
            //   else
            //     if (err.error.statusCode == 403)
            //       this.admin.errorAlert(err.error.message, true);
                // else
                //   this.admin.errorAlert(err.error.message, false);
        }
      }));
  }
}
