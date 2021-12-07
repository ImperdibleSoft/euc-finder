import { VideoCategory, InfluencerId, Video, WheelId } from '../../../types';
import eeveesVideos from './videos/eevees';
import electricDreamsVideos from './videos/electricDreams';
import eucVibesVideos from './videos/eucVibes';
import evxVideos from './videos/evx';
import hsiangVideos from './videos/hsiang';
import kujiVideos from './videos/kuji';
import madpackVideos from './videos/madpack';

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
  ...eeveesVideos,
  ...electricDreamsVideos,
  ...eucVibesVideos,
  ...evxVideos,
  ...hsiangVideos,
  ...kujiVideos,
  ...madpackVideos
];