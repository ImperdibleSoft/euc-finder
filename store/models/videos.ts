import { VideosState } from '../types';
import { videos } from './data';

export const getVideosInitialState = (): VideosState => ({
  collection: videos,
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