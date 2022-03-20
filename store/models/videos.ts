import { getLastVisit } from '../../utils';
import { VideosState } from '../types';

export const getVideosInitialState = (): VideosState => ({
  collection: [],
  filters: {
    categories: [],
    influencers: [],
    languages: [],
    wheels: []
  },
  lastVisit: getLastVisit(),
  pagination: {
    promotedOffset: 0,
    unwatchedOffset: 0,
    watchedOffset: 0
  },
  sorting: undefined
});
