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
    
    if (req.url.includes('/token')) {
      return next.handle(req);
    }
    const token = localStorage.getItem('spotify_access_token');

    let clonedReq = req;
    if (token) {
      clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(clonedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.spotifyAuthService.refreshToken().pipe(
            switchMap((newToken: string) => {
              clonedReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${newToken}`,
                },
              });
              return next.handle(clonedReq);
            }),
            catchError(() => {
              this.sesionService.clearSession();
              this.router.navigate(['/login']); 
              return throwError(() => new Error('Session expired'));
            })
          );
        }

        return throwError(() => error);
      })
    );
  }
}



// import { HttpInterceptorFn } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { SpotifyAuthService } from '../services/spotify-auth.service';
// import { catchError, switchMap, throwError } from 'rxjs';

// export const AuthInterceptor: HttpInterceptorFn = (req, next) => {


//   const authService = inject(SpotifyAuthService);
//   const token = localStorage.getItem('spotify_access_token');

//   const authReq = token
//     ? req.clone({
//         setHeaders: { Authorization: `Bearer ${token}` },
//       })
//     : req;

//   return next(authReq).pipe(
//     catchError((error) => {
//       if (error.status === 401) {
//         return authService.refreshToken().pipe(
//           switchMap((newToken: string) => {
//             const retryReq = req.clone({
//               setHeaders: { Authorization: `Bearer ${newToken}` },
//             });
//             return next(retryReq);
//           }),
//           catchError(() => {
//             // authService.handle401(); // Hace logout y redirige
//             return throwError(() => new Error('Session expired'));
//           })
//         );
//       }

//       return throwError(() => error);
//     })
//   );
// };
