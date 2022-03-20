import { InfluencerId } from '../../types';
import { RootState } from '../types';

export const getPromotedInfluencers = ({ influencers }: RootState) => {
  const promoted = influencers.collection.filter(influencer => influencer.promoted);
  return promoted;
};

export const getRegularInfluencers = ({ influencers }: RootState) => {
  const regular = influencers.collection.filter(influencer => !influencer.promoted);
  return regular;
};

export const getInfluencers = (rootState: RootState) => [
  ...getPromotedInfluencers(rootState),
  ...getRegularInfluencers(rootState)
];

export const getInfluencerById = (id: InfluencerId) =>
  ({ influencers }: RootState) =>
    influencers.collection.find(i => i.id === id);
