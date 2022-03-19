import { InfluencerId } from '../../types';
import { RootState } from '../types';

export const getSponsoredInfluencers = ({ influencers }: RootState) => {
  const sponsored = influencers.collection.filter(influencer => influencer.sponsored);
  return sponsored;
};

export const getInfluencers = (rootState: RootState) => {
  const nonSponsored = rootState.influencers.collection.filter(influencer => !influencer.sponsored);

  return [
    ...getSponsoredInfluencers(rootState),
    ...nonSponsored
  ];
};

export const getInfluencerById = (id: InfluencerId) =>
  ({ influencers }: RootState) =>
    influencers.collection.find(i => i.id === id);
