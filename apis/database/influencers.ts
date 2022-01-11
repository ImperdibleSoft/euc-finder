import { Influencer } from '../../types';
import { influencers as availableInfluencers } from './data';

const getAllInfluencers = async (): Promise<Influencer[]> => availableInfluencers;

export const influencers = {
  /**
   * Return a complete list of available curated influencers
   * that create content related to EUCs
   */
  getAllInfluencers
};