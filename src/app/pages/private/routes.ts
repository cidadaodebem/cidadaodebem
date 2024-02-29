import { Routes } from '@angular/router';
import { AccountPageComponent } from './account-page/account-page.component';
import { PrivatePageComponent } from './private-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PrivatePageComponent,
    children: [{ path: 'account', component: AccountPageComponent }],
  },
];
