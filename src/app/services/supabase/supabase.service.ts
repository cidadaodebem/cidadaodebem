import { Injectable, NgZone, inject } from '@angular/core';
import { credentials } from '@constants/credentials.constants';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabase!: SupabaseClient;

  private readonly ngZone = inject(NgZone);

  constructor() {
    this.ngZone.runOutsideAngular(() => this.instantiateSupabase());
  }

  private instantiateSupabase() {
    this.supabase = createClient(
      credentials.supabase.url,
      credentials.supabase.apiKey,
    );
  }
}
