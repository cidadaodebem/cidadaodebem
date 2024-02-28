import { Routes } from '@angular/router';
import { authGuard } from '@guards/auth.guard';
import { PagesComponent } from './pages.component';
import { Error404PageComponent } from './public/error-404-page/error-404-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./public/routes').then((m) => m.routes),
      },
      {
        path: '',
        loadChildren: () => import('./private/routes').then((m) => m.routes),
        canActivate: [authGuard],
      },
      { path: '**', component: Error404PageComponent },
    ],
  },
];
