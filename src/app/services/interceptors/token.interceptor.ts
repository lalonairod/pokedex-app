import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const TOKEN : string = 'poke token';
    console.log(TOKEN);

    if(TOKEN == ''){
      return next.handle(request);
    }

    console.log(request);

    const HEADER_REQUEST : HttpRequest<any> = request.clone({
      headers : request.headers.set('Authorization', TOKEN)
    })

    return next.handle(HEADER_REQUEST);

    
  }
}
