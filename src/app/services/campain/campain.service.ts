import { Injectable } from '@angular/core';
import { Campain } from '@models/campain.models';
import { DbService } from '@services/db/db.service';

@Injectable({
  providedIn: 'root',
})
export class CampainService {
  constructor(private db: DbService) {}

  upsert(item: Campain) {}

  list() {
    return this.db.list<Campain>('campain', [
      '*',
      'agent (id, name, photo)',
      'author (id, name, photo)',
    ]);
  }

  get(itemId: string) {
    return this.db.get<Campain>('campain', itemId, [
      '*',
      'agent (id, name, photo, party (id, name, short_name, website))',
      'author (id, name, photo)',
    ]);
  }
}
