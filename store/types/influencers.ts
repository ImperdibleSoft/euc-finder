import { Influencer } from '../../types';
import { SetVideosAction } from './videos';

export interface InfluencersState {
  collection: Influencer[];
}

export type InfluencerActions =
  | SetVideosAction;