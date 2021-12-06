import { InfluencerId } from '../../types';
import { RootState } from '../types';

export const getInfluencers = ({ influencers }: RootState) =>
  influencers.collection;

export const getInfluencerById = (id: InfluencerId) =>
  ({ influencers }: RootState) =>
    influencers.collection.find(i => i.id === id);