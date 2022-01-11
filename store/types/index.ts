import { App, Brand, Influencer, Store, Video, Wheel, WheelPurchaseLinks } from '../../types';
import { ConfigState } from './config';
import { InfluencersState } from './influencers';
import { SettingsState } from './settings';
import { VideosState } from './videos';
import { WheelsState } from './wheels';

export * from './config';
export * from './influencers';
export * from './settings';
export * from './videos';
export * from './wheels';

export interface RootState {
  config: ConfigState;
  influencers: InfluencersState;
  settings: SettingsState;
  videos: VideosState;
  wheels: WheelsState;
}

export interface SetInitialDataAction {
  type: 'SET_APP_DATA',
  payload: {
    apps: App[],
    brands: Brand[],
    dealers: Store[];
    influencers: Influencer[],
    purchaseLinks: WheelPurchaseLinks
    videos: Video[];
    wheels: Wheel[];
  }
}