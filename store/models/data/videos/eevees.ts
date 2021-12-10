import { InfluencerId, Video, VideoCategory, WheelId } from '../../../../types';

const eeveesVideos: Video[] = [
  {
    url: 'https://www.youtube.com/watch?v=Yf2hPayrP2I',
    tags: [
      InfluencerId.eevees,
      VideoCategory.chatting,
      WheelId.sherman,
      WheelId.rsHT,
      WheelId.exnHS,
      WheelId.exnHT
    ],
    date: new Date('04/May/2021')
  },
  {
    url: 'https://www.youtube.com/watch?v=LRLH-d9YQXg',
    tags: [
      InfluencerId.eevees,
      VideoCategory.review,
      VideoCategory.commuting,
      WheelId.v12
    ],
    date: new Date('23/Jul/2021')
  },
  {
    url: 'https://www.youtube.com/watch?v=uj0wxHtQ9-0',
    tags: [InfluencerId.eevees, VideoCategory.chatting, WheelId.abrams],
    date: new Date('03/Aug/2021')
  },
  {
    url: 'https://www.youtube.com/watch?v=o_eN1KQyM5o',
    tags: [InfluencerId.eevees, VideoCategory.chatting, WheelId.ksS20],
    date: new Date('26/Aug/2021')
  },
  {
    url: 'https://www.youtube.com/watch?v=w1EN668qbGo',
    tags: [InfluencerId.eevees, VideoCategory.chatting, WheelId.ksS20],
    date: new Date('27/Aug/2021')
  },
  {
    url: 'https://www.youtube.com/watch?v=_aq8gJCMnyM',
    tags: [
      InfluencerId.eevees,
      VideoCategory.review,
      VideoCategory.commuting,
      WheelId.commanderHT
    ],
    date: new Date('21/Oct/2021')
  },
  {
    url: 'https://www.youtube.com/watch?v=EDIcNMEs5dY',
    tags: [
      InfluencerId.eevees,
      VideoCategory.review,
      VideoCategory.commuting,
      WheelId.abrams
    ],
    date: new Date('01/Nov/2021')
  },
  {
    url: 'https://www.youtube.com/watch?v=Iv1Or0Nd0zE',
    tags: [
      InfluencerId.eevees,
      VideoCategory.review,
      VideoCategory.commuting,
      WheelId.abrams
    ],
    date: new Date('18/Nov/2021')
  }
];

export default eeveesVideos;
