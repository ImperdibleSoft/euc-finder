import { Influencer } from '../../types';
import { influencers as availableInfluencers } from './data';
import fetchDataFromDB from './dataBaseApi';
import { createInfluencersFromServer } from './modelCreators/influencers';
import { InfluencerFromServer } from './types/influencers';

const getAllInfluencers = async (): Promise<Influencer[]> => {
  try {
    const query = 'SELECT id, name, channel, avatar, sponsor FROM influencers';
    const data = (await fetchDataFromDB(query)) as InfluencerFromServer[];
    const influencers = createInfluencersFromServer(data);
    return influencers;
  } catch (err) {
    console.error('error', err);
  }

  return availableInfluencers;
};

export const influencers = {
  /**
   * Return a complete list of available curated influencers
   * that create content related to EUCs
   */
  getAllInfluencers
};
