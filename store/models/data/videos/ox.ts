import { InfluencerId, Video, VideoCategory, WheelId } from '../../../../types';

const oxVideos: Video[] = [
  {
    url: 'https://www.youtube.com/watch?v=MUtHWox6fys',
    tags: [InfluencerId.ox, VideoCategory.review, VideoCategory.commuting, WheelId.v12],
    date: new Date('20/May/2021')
  }
];

export default oxVideos;
