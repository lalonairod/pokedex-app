import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buffer } from 'buffer';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const TOKEN : string = Buffer.from('postman:password').toString('base64');
    const HEADER_REQUEST : HttpRequest<any> = request.clone({
      headers : request.headers.set('Authorization', `Basic ${TOKEN}`)
    })

    return next.handle(HEADER_REQUEST);

    
  }
}
