import { Routes } from '@angular/router';
import { AgentPageComponent } from './agent-page/agent-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { CampainAddPageComponent } from './campain-add-page/campain-add-page.component';
import { CampainListPageComponent } from './campain-list-page/campain-list-page.component';
import { CampainPageComponent } from './campain-page/campain-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PartyPageComponent } from './party-page/party-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PublicPagesComponent } from './public-pages.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicPagesComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'auth', component: AuthPageComponent },
      { path: 'campain', component: CampainListPageComponent },
      { path: 'campain/add', component: CampainAddPageComponent },
      { path: 'campain/:id', component: CampainPageComponent },
      { path: 'agent/:id', component: AgentPageComponent },
      { path: 'profile/:id', component: ProfilePageComponent },
      { path: 'party/:id', component: PartyPageComponent },
    ],
  },
];
