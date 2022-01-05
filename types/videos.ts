import { InfluencerId } from './influencers';
import { WheelId } from './wheel';

export enum VideoCategory {
  chatting = 'chatting',
  commuting = 'commuting',
  comparision = 'comparision',
  offroad = 'offroad',
  reveal = 'reveal',
  review = 'review',
}

export type Lang = 'en' | 'es'

export interface Video {
  url: string;
  tags: (InfluencerId | VideoCategory | WheelId)[];
  language: Lang;
  publishDate: Date;
  releaseDate: Date;
}