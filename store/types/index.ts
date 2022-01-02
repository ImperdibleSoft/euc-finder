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