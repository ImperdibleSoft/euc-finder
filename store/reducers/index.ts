import { combineReducers } from 'redux';
import configReducer from './config';
import influencersReducer from './influencers';
import settingsReducer from './settings';
import videosReducer from './videos';
import wheelsReducer from './wheels';

const rootReducer = combineReducers({
  config: configReducer,
  influencers: influencersReducer,
  settings: settingsReducer,
  videos: videosReducer,
  wheels: wheelsReducer
});

export default rootReducer;