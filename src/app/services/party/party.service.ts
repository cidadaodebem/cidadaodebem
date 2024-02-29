import { Injectable } from '@angular/core';
import { Party } from '@models/party.models';
import { DbService } from '@services/db/db.service';

@Injectable({
  providedIn: 'root',
})
export class PartyService {
  constructor(private db: DbService) {}

  upsert(item: Party) {}

  list() {
    return this.db.list<Party>('party');
  }

  get(itemId: string) {
    return this.db.get<Party>('party', itemId, [
      'id, created_at, name, short_name, foundation_date, website, photo',
    ]);
  }
}
