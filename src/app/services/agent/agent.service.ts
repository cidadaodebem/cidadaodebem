import { Injectable } from '@angular/core';
import { Agent } from '@models/agent.models';
import { DbService } from '@services/db/db.service';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  constructor(private db: DbService) {}

  upsert(item: Agent) {}

  list() {
    return this.db.list<Agent>('agent');
  }

  get(itemId: string) {
    return this.db.get<Agent>('agent', itemId, [
      'id, name, photo, twitter, party (id, name, short_name), position (id, name, description)',
    ]);
  }
}
