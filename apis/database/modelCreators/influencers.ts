import { Influencer } from '../../../types';
import { InfluencerFromServer } from '../types/influencers';

const createInfluencerFromServer = ({
  avatar, 
  channel,
  id,
  name,
  sponsor
}: InfluencerFromServer): Influencer => ({
  channel: `${ channel }`,
  id: `${ id }`,
  name: `${ name ?? id }`,
  avatar: `${ avatar }`,
  promoted: !!sponsor
});

export const createInfluencersFromServer = (influencers: InfluencerFromServer[]): Influencer[] => {
  if (!Array.isArray(influencers)) {
    console.error('Invalid dealers object');
    return [];
  }

  return influencers.map(createInfluencerFromServer);
};
