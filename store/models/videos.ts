import { VideosState } from '../types';
import { videos } from './data';

export const getVideosInitialState = (): VideosState => ({
  collection: videos,
  filters: {
    categories: [],
    influencers: [],
    wheels: []
  },
  sorting: undefined
});