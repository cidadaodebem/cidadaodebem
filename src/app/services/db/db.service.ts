import { Injectable } from '@angular/core';
import { SupabaseService } from '@services/supabase/supabase.service';
import { from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private supabaseService: SupabaseService) {}

  list<T = any>(table: string, fields: string[] = ['*']) {
    const fieldsString = fields.join(', ');
    return from(
      this.supabaseService.supabase
        .from(table)
        .select<typeof fieldsString, T>(fields.join(', ')),
    ).pipe(
      map((res) => {
        return res.data || [];
      }),
    );
  }

  get<T = any>(table: string, itemId: string, fields: string[] = ['*']) {
    const fieldsString = fields.join(', ');
    return from(
      this.supabaseService.supabase
        .from(table)
        .select<typeof fieldsString, T>(fields.join(', '))
        .filter('id', 'eq', itemId)
        .single(),
    ).pipe(
      map((res) => {
        return res.data || undefined;
      }),
    );
  }
}
