export enum InfluencerId {
  bonheursurSeine = 'bonheursurSeine',
  chooch = 'chooch',
  eevees = 'eevees',
  electricDreams = 'electricDreams',
  eucVibes = 'eucVibes',
  evx = 'evx',
  hsiang = 'hsiang',
  kellyChameleons = 'kellyChameleons',
  kuji = 'kuji',
  madpack = 'madpack',
  mrFlex = 'mrFlex',
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
  promoted?: boolean;
}
