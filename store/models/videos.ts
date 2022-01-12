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
    sponsoredOffset: 0,
    newOffset: 0,
    watchedOffset: 0
  },
  sorting: undefined
});