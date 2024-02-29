import { Injectable } from '@angular/core';
import { UserProfile } from '@models/user.models';
import { DbService } from '@services/db/db.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private db: DbService) {}

  upsert(item: UserProfile) {}

  list() {
    return this.db.list<UserProfile>('profile');
  }

  get(itemId: string) {
    return this.db.get<UserProfile>('profile', itemId, [
      'id, name, bio, photo, twitter',
    ]);
  }
}
