import { Influencer } from '../../types';

export interface InfluencersState {
  collection: Influencer[];
}

export interface SetInfluencersAction {
  type: 'SET_VIDEOS' | 'SET_WHEELDATA',
  payload: {
    influencers: Influencer[],
  }
}

export type InfluencerActions =
  | SetInfluencersAction;