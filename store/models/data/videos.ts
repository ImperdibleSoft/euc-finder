import { VideoCategory, InfluencerId, Video, WheelId } from '../../../types';


export const videos: Video[] = [
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
];