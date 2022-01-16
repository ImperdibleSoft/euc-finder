import { InfluencerId } from '../../types';
import { RootState } from '../types';

export const getSponsoredInfluencers = ({ influencers }: RootState) =>
  influencers.collection.filter(influencer => influencer.sponsored);

export const getInfluencers = (rootState: RootState) =>
  [
    ...getSponsoredInfluencers(rootState),
    ...rootState.influencers.collection.filter(influencer => !influencer.sponsored)
  ];

export const getInfluencerById = (id: InfluencerId) =>
  ({ influencers }: RootState) =>
    influencers.collection.find(i => i.id === id);