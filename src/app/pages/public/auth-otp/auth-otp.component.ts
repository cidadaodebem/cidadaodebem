import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-auth-otp',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './auth-otp.component.html',
  styleUrl: './auth-otp.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthOtpComponent {
  email = '';

  linkSuccess = false;

  spinner$ = new ReplaySubject<boolean>();

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
    this.auth.currentUser.subscribe((user) => {
      if (user) {
        this.router.navigateByUrl('/workspace', { replaceUrl: true });
      }
    });
  }

  ngOnInit(): void {}

  async signIn() {
    this.spinner$.next(true);
    const result = await this.auth.signInWithEmail(this.email);

    this.spinner$.next(false);
    if (!result.error) {
      this.linkSuccess = true;
    } else {
      alert(result.error.message);
    }
  }
}

/***
eyJhbGciOiJIUzI1NiIsImtpZCI6ImhteGhIYUo5V1FjL0pxSFYiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzA5MDA2NTE4LCJpYXQiOjE3MDkwMDI5MTgsImlzcyI6Imh0dHBzOi8vbXdudnZ6eWR6dXp4Z2hzYmtwZGsuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjQzNTUxOTBmLTI3ZWUtNDFjYS1hNWFiLWIzMDI0Njg5NjM2MCIsImVtYWlsIjoiYnJ1bm9kYXNqQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im90cCIsInRpbWVzdGFtcCI6MTcwOTAwMjkxOH1dLCJzZXNzaW9uX2lkIjoiNmM5OTM1MGEtOGFiNy00YjAyLTlkZTgtNzJjYzNjMzhjMWY3In0.vlFe1sXwuW2GrXPWpvJrh8E3auPKxwB0K9tXb89Tw0M
 
token=eyJhbGciOiJIUzI1NiIsImtpZCI6ImhteGhIYUo5V1FjL0pxSFYiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzA5MDA2NTE4LCJpYXQiOjE3MDkwMDI5MTgsImlzcyI6Imh0dHBzOi8vbXdudnZ6eWR6dXp4Z2hzYmtwZGsuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjQzNTUxOTBmLTI3ZWUtNDFjYS1hNWFiLWIzMDI0Njg5NjM2MCIsImVtYWlsIjoiYnJ1bm9kYXNqQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im90cCIsInRpbWVzdGFtcCI6MTcwOTAwMjkxOH1dLCJzZXNzaW9uX2lkIjoiNmM5OTM1MGEtOGFiNy00YjAyLTlkZTgtNzJjYzNjMzhjMWY3In0.vlFe1sXwuW2GrXPWpvJrh8E3auPKxwB0K9tXb89Tw0M
& expires_at=1709006518
& expires_in=3600
& refresh_token=KQOw5bebzmYZjRc_3my2rQ
& token_type=bearer
& type=signup
 */
