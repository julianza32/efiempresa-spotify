import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './app/interceptors/auth.interceptor';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

const bootstrap = () =>
    bootstrapApplication(AppComponent, {
        ...config,
        providers: [
          {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
      
          },
          provideRouter(routes),
          provideHttpClient(withInterceptorsFromDi()),
        ],
      }).catch((err) => console.error(err));

export default bootstrap;
