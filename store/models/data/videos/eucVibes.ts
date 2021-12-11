import { InfluencerId, Video, VideoCategory, WheelId } from '../../../../types';

const eucVibesVideos: Video[] = [
  {
    url: 'https://www.youtube.com/watch?v=EWS7oZGqOsw',
    tags: [InfluencerId.eucVibes, VideoCategory.review, WheelId.ex],
    date: new Date('11/Nov/2020'),
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=R6Yi2Q2WcxQ',
    tags: [InfluencerId.eucVibes, VideoCategory.review, WheelId.ex],
    date: new Date('07/Dec/2020'),
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=Lw83X01w-H8',
    tags: [InfluencerId.eucVibes, VideoCategory.reveal, WheelId.sherman],
    date: new Date('12/Jan/2021'),
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=IDKr-56N8EY',
    tags: [InfluencerId.eucVibes, VideoCategory.reveal, WheelId.v12],
    date: new Date('26/Apr/2021'),
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=WKcLhCStmYU',
    tags: [InfluencerId.eucVibes, VideoCategory.review, WheelId.sherman],
    date: new Date('12/Jun/2021'),
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=89kXatF80zg',
    tags: [
      InfluencerId.eucVibes,
      VideoCategory.chatting,
      VideoCategory.comparision,
      WheelId.commanderHS,
      WheelId.commanderHT,
      WheelId.ksS20,
      WheelId.abrams,
      WheelId.hero
    ],
    date: new Date('20/Sep/2021'),
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=aA4i_juHsaQ',
    tags: [
      InfluencerId.eucVibes,
      VideoCategory.chatting,
      VideoCategory.comparision,
      WheelId.commanderHS,
      WheelId.commanderHT,
      WheelId.ksS20,
      WheelId.abrams,
      WheelId.hero
    ],
    date: new Date('24/Sep/2021'),
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=eWfvp8BakuE',
    tags: [InfluencerId.eucVibes, VideoCategory.review, WheelId.abrams],
    date: new Date('29/Oct/2021'),
    language: 'en'
  }
];

export default eucVibesVideos;
