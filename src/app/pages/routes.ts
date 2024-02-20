import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    loadChildren: () => import('./public-pages/routes').then((m) => m.routes),
  },
];
