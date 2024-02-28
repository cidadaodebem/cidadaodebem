import { Injectable } from '@angular/core';
import { Agent } from '@models/agent.models';
import { DbService } from '@services/db/db.service';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  constructor(private db: DbService) {}

  upsert(item: Agent) {}

  get() {
    return this.db.get<Agent>('agent');
  }
}
