import { VideosState } from '../types';

export const getVideosInitialState = (): VideosState => ({
  collection: [],
  filters: {
    categories: [],
    influencers: [],
    languages: [],
    wheels: []
  },
  pagination: {
    sponsoredOffset: 0,
    newOffset: 0,
    watchedOffset: 0
  },
  sorting: undefined
});