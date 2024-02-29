import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { appConstants } from '@constants/app.constants';
import { AuthService } from '@services/auth/auth.service';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterOutlet, NgIf, RouterLink, AsyncPipe],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent {
  authService = inject(AuthService);

  user$ = this.authService.user$;

  constants = appConstants;

  showLeftMenu$ = new ReplaySubject();

  logout() {
    this.authService.logout();
  }
}
