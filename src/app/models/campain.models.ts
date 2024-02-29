import { Agent } from './agent.models';
import { UserProfile } from './user.models';

export type Campain = {
  id: string;
  created_at: string;
  author: UserProfile;
  agent: Agent;
  title: string;
  subtitle: string;
  description: string;
  video_url: string;
  image_url: string;
};

export type CampainPost = Campain & {
  author: string;
  agent: number;
};

export type CampainMap = {
  [key: string]: Campain;
};

export type CampainList = Campain[];
