import { Party } from './party.models';
import { PublicPosition } from './position.models';

export type Agent = {
  id: string;
  created_at: Date;
  name: string;
  photo: string;
  position: PublicPosition;
  party: Party;
  twitter: string;
};

export type AgentMap = {
  [key: string]: Agent;
};

export type AgentList = Agent[];
