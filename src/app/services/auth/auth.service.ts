import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '@services/profile/profile.service';
import { SupabaseService } from '@services/supabase/supabase.service';
import { AuthChangeEvent, User } from '@supabase/supabase-js';
import { ReplaySubject, of, shareReplay, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authData: ReplaySubject<boolean | User | any> = new ReplaySubject();

  profileService = inject(ProfileService);

  user$ = this.authData.asObservable().pipe(
    switchMap((user) => {
      if (user) {
        return this.profileService.get(user.id);
      } else {
        return of(undefined);
      }
    }),
    shareReplay(),
  );

  constructor(
    private router: Router,
    private supabaseService: SupabaseService,
  ) {
    this.loadSignedUser();
    this.watchUserChange();
  }

  signInWithEmail(email: string) {
    return this.supabaseService.supabase.auth.signInWithOtp({
      email,
    });
  }

  signInWithGooglel(redirectTo?: string) {
    return this.supabaseService.supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
      },
    });
  }

  logout() {
    this.supabaseService.supabase.auth.signOut();
  }

  private async loadSignedUser() {
    const session = await this.supabaseService.supabase.auth.getUser();
    const user = session?.data?.user;
    if (user) {
      this.authData.next(user);
    } else {
      this.authData.next(undefined);
    }
    return user;
  }

  private watchUserChange() {
    this.supabaseService.supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session) => {
        const user = session?.user;
        switch (event) {
          case 'SIGNED_IN':
            this.authData.next(user);
            break;
          case 'SIGNED_OUT':
            this.authData.next(undefined);
            break;
        }
      },
    );
  }
}
