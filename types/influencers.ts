export enum InfluencerId {
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
}

export interface Influencer {
  id: InfluencerId;
  name: string;
  channel: string;
  avatar?: string;
  sponsored?: boolean;
}