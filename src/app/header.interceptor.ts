import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = 'sdsds';
    let req = request.clone({
      method: 'post',
      body: {
        product: 'redmi',
      },
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    });
    return next.handle(request);
    // return next.handle(req);
    // return next.handle(req).pipe(
    //   catchError((er: any) => {
    //     if (er.status == 404) {
    //       console.log('invalid');
    //     }
    //     return throwError('er msg');
    //   })
    // );
  }
}
