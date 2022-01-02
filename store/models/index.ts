import { RootState } from '../types';
import { getConfigInitialState } from './config';
import { getInfluencersInitialState } from './influencers';
import { getSettingsInitialState } from './settings';
import { getVideosInitialState } from './videos';
import { getWheelsInitialState } from './wheels';

export * from './config';
export * from './influencers';
export * from './settings';
export * from './videos';
export * from './wheels';

export const getRootInitialState = (): RootState => ({
  config: getConfigInitialState(),
  influencers: getInfluencersInitialState(),
  settings: getSettingsInitialState(),
  videos: getVideosInitialState(),
  wheels: getWheelsInitialState()
});