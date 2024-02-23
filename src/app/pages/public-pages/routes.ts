import { Routes } from '@angular/router';
import { CampainAddPageComponent } from './campain-add-page/campain-add-page.component';
import { CampainListPageComponent } from './campain-list-page/campain-list-page.component';
import { CampainPageComponent } from './campain-page/campain-page.component';
import { Error404PageComponent } from './error-404-page/error-404-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'campain', component: CampainListPageComponent },
  { path: 'campain/add', component: CampainAddPageComponent },
  { path: 'campain/:id', component: CampainPageComponent },
  { path: '**', component: Error404PageComponent },
];
