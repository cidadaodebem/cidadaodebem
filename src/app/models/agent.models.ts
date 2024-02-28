export type Agent = {
  id: string;
  created_at: string;
  name: string;
  photo: string;
};

export type AgentMap = {
  [key: string]: Agent;
};

export type AgentList = Agent[];
