import { combineReducers } from 'redux';
import influencersReducer from './influencers';
import settingsReducer from './settings';
import videosReducer from './videos';
import wheelsReducer from './wheels';

const rootReducer = combineReducers({
  influencers: influencersReducer,
  settings: settingsReducer,
  videos: videosReducer,
  wheels: wheelsReducer
});

export default rootReducer;