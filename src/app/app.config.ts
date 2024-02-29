import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { AuthService } from '@services/auth/auth.service';
import { take } from 'rxjs';
import { routes } from './app.routes';

const initializeApp = (authService: AuthService) => () =>
  authService.user$.pipe(take(1));

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [AuthService],
    },
  ],
};
