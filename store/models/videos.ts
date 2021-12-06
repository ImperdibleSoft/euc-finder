import { Categories, InfluencerId, WheelId } from '../../types';
import { VideosState } from '../types';

export const getVideosInitialState = (): VideosState => ({
  collection: [
    {
      url: 'https://www.youtube.com/watch?v=84czA_ugr28',
      tags: [InfluencerId.wrongWay, Categories.review, Categories.offroad, WheelId.exnHT]
    },
    {
      url: 'https://www.youtube.com/watch?v=MUtHWox6fys',
      tags: [InfluencerId.ox, Categories.review, WheelId.v12]
    },
    {
      url: 'https://www.youtube.com/watch?v=yB325Y0Unbg',
      tags: [InfluencerId.kuji, Categories.review, WheelId.v11]
    }
  ],
  filters: undefined,
  sorting: undefined
});