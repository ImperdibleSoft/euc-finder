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

export type Lang = 'en' | 'es' | 'fr'

export interface Video {
  url: string;
  tags: (InfluencerId | VideoCategory | WheelId)[];
  language: Lang;
  /** 
   * Date when video was published on youtube 
   */
  publishDate: string;
  /**
   * Date when video was included in EUC Finder
   */
  releaseDate: string;
}
