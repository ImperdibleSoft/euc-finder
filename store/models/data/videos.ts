import { VideoCategory, InfluencerId, Video, WheelId } from '../../../types';
import eeveesVideos from './videos/eevees';
import electricDreamsVideos from './videos/electricDreams';
import eucVibesVideos from './videos/eucVibes';
import evxVideos from './videos/evx';
import hsiangVideos from './videos/hsiang';
import kujiVideos from './videos/kuji';
import madpackVideos from './videos/madpack';
import oneradwheelVideos from './videos/oneRadWheel';
import oxVideos from './videos/ox';

export const videos: Video[] = [
  {
    url: 'https://www.youtube.com/watch?v=84czA_ugr28',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.offroad, WheelId.exnHT],
    date: new Date('01/Nov/2021'),
    language: 'en'
  },
  ...eeveesVideos,
  ...electricDreamsVideos,
  ...eucVibesVideos,
  ...evxVideos,
  ...hsiangVideos,
  ...kujiVideos,
  ...madpackVideos,
  ...oneradwheelVideos,
  ...oxVideos
];