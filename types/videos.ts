import { InfluencerId } from './influencers';
import { WheelId } from './wheel';

export enum VideoCategory {
  commuting = 'commuting',
  comparision = 'comparision',
  offroad = 'offroad',
  reveal = 'reveal',
  review = 'review',
}

export interface Video {
  url: string;
  tags: (InfluencerId | VideoCategory | WheelId)[];
}