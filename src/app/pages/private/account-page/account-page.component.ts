import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountPageComponent {
  private authService = inject(AuthService);

  profile$ = this.authService.user$;
}
