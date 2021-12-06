import { RootState } from '../types';
import { getInfluencersInitialState } from './influencers';
import { getSettingsInitialState } from './settings';
import { getVideosInitialState } from './videos';
import { getWheelsInitialState } from './wheels';

export * from './influencers';
export * from './settings';
export * from './videos';
export * from './wheels';

export const getRootInitialState = (): RootState => ({
  influencers: getInfluencersInitialState(),
  settings: getSettingsInitialState(),
  videos: getVideosInitialState(),
  wheels: getWheelsInitialState()
});