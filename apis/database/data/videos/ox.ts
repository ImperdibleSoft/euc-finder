import { InfluencerId, Video, VideoCategory, WheelId } from '../../../../types';

const oxVideos: Video[] = [
  {
    url: 'https://www.youtube.com/watch?v=MUtHWox6fys',
    tags: [InfluencerId.ox, VideoCategory.review, VideoCategory.commuting, WheelId.v12],
    publishDate: '20/May/2021',
    releaseDate: '07/Dec/2021',
    language: 'es'
  },
  {
    url: 'https://www.youtube.com/watch?v=V_Uo8Pi_8TU',
    tags: [
      InfluencerId.ox,
      VideoCategory.chatting,
      VideoCategory.commuting,
      WheelId.v10f,
      WheelId.v11,
      WheelId.monster
    ],
    publishDate: '02/May/2022',
    releaseDate: '03/May/2022',
    language: 'es'
  }
];

export default oxVideos;
