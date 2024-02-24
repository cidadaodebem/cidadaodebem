export type Campain = {
  label: string;
  description: string;
  iframeUrl: string;
  path: string;
};

export type CampainMap = {
  [key: string]: Campain;
};

export type CampainList = Campain[];
