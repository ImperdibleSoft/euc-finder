import { InfluencerId } from '../../types';
import { RootState } from '../types';

export const getInfluencers = ({ influencers }: RootState) =>
  [
    ...influencers.collection.filter(influencer => influencer.sponsored),
    ...influencers.collection.filter(influencer => !influencer.sponsored)
  ];

export const getInfluencerById = (id: InfluencerId) =>
  ({ influencers }: RootState) =>
    influencers.collection.find(i => i.id === id);