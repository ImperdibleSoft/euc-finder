export enum InfluencerId {
  chooch = 'chooch',
  eevees = 'eevees',
  electricDreams = 'electricDreams',
  eucVibes = 'eucVibes',
  evx = 'evx',
  hsiang = 'hsiang',
  kellyChameleons = 'kellyChameleons',
  kuji = 'kuji',
  madpack = 'madpack',
  oneradwheel = 'onerad',
  ox = 'ox',
  wrongWay = 'wrongWay',
  zenLee = 'zenLee',
}

export interface Influencer {
  id: InfluencerId;
  name: string;
  channel: string;
  avatar?: string;
  sponsored?: boolean;
}