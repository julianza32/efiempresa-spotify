


import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SpotifyAuthService } from '../services/spotify-auth.service';
import { SesionService } from '../services/session.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private spotifyAuthService: SpotifyAuthService,
    private sesionService: SesionService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let clonedReq = req;
    if (req.url.includes('/token')) {
      return next.handle(req);
    }

    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('spotify_access_token');
      if (token) {
        clonedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    }

    return next.handle(clonedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.sesionService.clearSession();
          this.router.navigate(['/login']);
          return throwError(() => new Error('Session expired'));
        }
        if (error.status === 404) {
          this.router.navigate(['/not-found']);
          return throwError(() => new Error('Not found'));
        }
        return throwError(() => error);
      })
    );
  }
}
