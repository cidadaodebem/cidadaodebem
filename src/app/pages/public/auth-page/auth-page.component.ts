import { DOCUMENT, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {
  redirectUrl?: string;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.mountRedirectUrl();
  }

  signInWithGoogle() {
    this.auth.signInWithGooglel(this.redirectUrl);
  }

  private mountRedirectUrl() {
    const redirectPath = this.route.snapshot.queryParams['redirect'];
    const origin = this.document.location.origin;
    this.redirectUrl = redirectPath ? `${origin}${redirectPath}` : undefined;
    console.log('redirectUrl', this.redirectUrl);
  }
}
