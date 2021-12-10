import { InfluencersState } from '../types';
import { influencers } from './data';

export const getInfluencersInitialState = (): InfluencersState => ({ collection: influencers });