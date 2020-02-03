import { Injectable, resolveForwardRef } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class BasicAuthService implements HttpInterceptor {

 
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let username = "user";
    let password = "user";
     let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    req = req.clone({
      setHeaders : {
        Authorization : basicAuthHeaderString
      }
    })
    return next.handle(req);
  }
  }

