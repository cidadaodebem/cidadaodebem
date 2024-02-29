import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '@services/supabase/supabase.service';
import { User } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser: BehaviorSubject<boolean | User | any> =
    new BehaviorSubject(null);

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

  signInWithGooglel() {
    return this.supabaseService.supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:4200/auth-otp',
      },
    });
  }

  logout() {
    this.supabaseService.supabase.auth.signOut();
  }

  get currentUser() {
    return this._currentUser.asObservable();
  }

  private async loadSignedUser() {
    const user = await this.supabaseService.supabase.auth.getUser();
    if (user) {
      this._currentUser.next(user);
    } else {
      this._currentUser.next(false);
    }
  }

  private watchUserChange() {
    this.supabaseService.supabase.auth.onAuthStateChange((event, session) => {
      if (event == 'SIGNED_IN') {
        this._currentUser.next(session!.user);
      } else {
        this._currentUser.next(false);
        this.router.navigateByUrl('/', { replaceUrl: true });
      }
    });
  }
}
