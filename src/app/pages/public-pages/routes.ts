import { Routes } from '@angular/router';
import { CampainPageComponent } from './campain-page/campain-page.component';
import { Error404PageComponent } from './error-404-page/error-404-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'campain', component: CampainPageComponent },
  { path: '**', component: Error404PageComponent },
];
