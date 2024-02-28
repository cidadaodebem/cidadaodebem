export type Campain = {
  id: string;
  created_at: string;
  author: number;
  agent: number;
  title: string;
  subtitle: string;
  description: string;
  video_url: string;
  image_url: string;
};

export type CampainMap = {
  [key: string]: Campain;
};

export type CampainList = Campain[];
