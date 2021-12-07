import { VideoCategory, InfluencerId, Video, WheelId } from '../../../types';
import eeveesVideos from './videos/eevees';
import electricDreamsVideos from './videos/electricDreams';
import eucVibesVideos from './videos/eucVibes';

export const videos: Video[] = [
  {
    url: 'https://www.youtube.com/watch?v=84czA_ugr28',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.offroad, WheelId.exnHT],
    date: new Date('01/Nov/2021')
  },
  {
    url: 'https://www.youtube.com/watch?v=MUtHWox6fys',
    tags: [InfluencerId.ox, VideoCategory.review, VideoCategory.commuting, WheelId.v12],
    date: new Date('20/May/2021')
  },
  {
    url: 'https://www.youtube.com/watch?v=yB325Y0Unbg',
    tags: [InfluencerId.kuji, VideoCategory.review, VideoCategory.commuting, WheelId.v11],
    date: new Date('29/May/2020')
  },
  ...eeveesVideos,
  ...electricDreamsVideos,
  ...eucVibesVideos
];