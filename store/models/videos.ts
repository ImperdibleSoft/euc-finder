import { VideoCategory, InfluencerId, WheelId } from '../../types';
import { VideosState } from '../types';

export const getVideosInitialState = (): VideosState => ({
  collection: [
    {
      url: 'https://www.youtube.com/watch?v=84czA_ugr28',
      tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.offroad, WheelId.exnHT]
    },
    {
      url: 'https://www.youtube.com/watch?v=MUtHWox6fys',
      tags: [InfluencerId.ox, VideoCategory.review, WheelId.v12]
    },
    {
      url: 'https://www.youtube.com/watch?v=yB325Y0Unbg',
      tags: [InfluencerId.kuji, VideoCategory.review, WheelId.v11]
    }
  ],
  filters: {
    categories: [],
    influencers: [],
    wheels: []
  },
  sorting: undefined
});