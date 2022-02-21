/* eslint-disable max-lines */
import { InfluencerId, Video, VideoCategory, WheelId } from '../../../../types';

const wrongWayVideos: Video[] = [
  {
    url: 'https://www.youtube.com/watch?v=0H0ql6wOeiA',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.nikola],
    publishDate: '31/Oct/2019',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=zJnnUKQ14rE',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.mten],
    publishDate: '08/Nov/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=zLHdXapGLzk',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.mcm5],
    publishDate: '13/Nov/2019',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=-ougRTNQlcI',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.v5f],
    publishDate: '20/Nov/2019',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },  {
    url: 'https://www.youtube.com/watch?v=RVBEMXTY2aI',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.tesla],
    publishDate: '10/Feb/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=_rVSqZtmXFE',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.msp],
    publishDate: '04/Mar/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=DBsTd8VCMuk',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.comparision,
      WheelId.v5f,
      WheelId.v8,
      WheelId.mcm5,
      WheelId.v10f,
      WheelId.tesla
    ],
    publishDate: '17/Mar/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=1ZAuFBZekbU',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.v11],
    publishDate: '03/Apr/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=iZS5c5z3f_M',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.ksS18],
    publishDate: '08/Apr/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=2Uv8aknhk-c',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.monster],
    publishDate: '11/Apr/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=dKi-mBbmPWs',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.nikola],
    publishDate: '28/Apr/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=Er0kOdhuoUc',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, VideoCategory.chatting, WheelId.ks16x],
    publishDate: '04/May/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=w2W3fFhILDw',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.ks16x],
    publishDate: '13/May/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=SKXA_iNs50c',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, VideoCategory.chatting, WheelId.v8f],
    publishDate: '15/May/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=CQFR9afWhGA',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, VideoCategory.offroad, WheelId.v8f],
    publishDate: '19/May/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=TDMSghr-FAI',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.comparision,
      WheelId.tesla,
      WheelId.nikola,
      WheelId.msp,
      WheelId.monster
    ],
    publishDate: '13/Jun/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=RB7tBrOWQN0',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, VideoCategory.chatting, WheelId.v11],
    publishDate: '11/Aug/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=sNS5GNcW3sM',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, VideoCategory.offroad, WheelId.v11],
    publishDate: '18/Aug/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=nzuLIO2Zjko',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, VideoCategory.chatting, WheelId.ksS18],
    publishDate: '21/Aug/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=gpo-AwuUXz0',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, VideoCategory.offroad, WheelId.ksS18],
    publishDate: '28/Aug/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=-hkxq3MQpZA',
    tags: [InfluencerId.wrongWay, VideoCategory.comparision, WheelId.v11, WheelId.ksS18],
    publishDate: '06/Sep/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=0D8npj4VwL0',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.review,
      VideoCategory.commuting,
      VideoCategory.offroad,
      WheelId.sherman
    ],
    publishDate: '11/Sep/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=_y2rGPOccNQ',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, WheelId.mcm5],
    publishDate: '16/Sep/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=_rAI_thWu5U',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.mcm5],
    publishDate: '24/Sep/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=b_wL3DdKiMo',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.v11],
    publishDate: '25/Sep/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=M884Ln6lkOk',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.msp],
    publishDate: '13/Oct/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=07aIkKPtlm4',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, VideoCategory.chatting, WheelId.sherman],
    publishDate: '16/Oct/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=J83NtcIfsHw',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.v11],
    publishDate: '25/Oct/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=g2VsyMg8Ox0',
    tags: [InfluencerId.wrongWay, VideoCategory.review, WheelId.sherman],
    publishDate: '29/Oct/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=QY62CF7PUyY',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, VideoCategory.chatting, WheelId.tesla],
    publishDate: '16/Nov/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=-lxrr8ABkR4',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.chatting, WheelId.msx],
    publishDate: '18/Nov/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=Qmb94nM1big',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, VideoCategory.chatting, WheelId.rsHT],
    publishDate: '20/Nov/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=wLh7mMqAn0w',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, VideoCategory.chatting, WheelId.ex],
    publishDate: '24/Nov/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=Rm5ZEZ8noOA',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.rsHT],
    publishDate: '30/Nov/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=sXC2cBPIhcw',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.msx],
    publishDate: '2/Dec/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=xw5YtE_boWI',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.sherman],
    publishDate: '06/Dec/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=sgH5kmv_TbM',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, VideoCategory.offroad, WheelId.ex],
    publishDate: '08/Dec/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=8xEM-EnKW-o',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, VideoCategory.offroad, WheelId.ex],
    publishDate: '19/Dec/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=UO21AL1-99g',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.comparision,
      WheelId.sherman,
      WheelId.ex,
      WheelId.msx
    ],
    publishDate: '24/Dec/2020',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=9QZS06Uf3pk',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, VideoCategory.chatting, WheelId.v10f],
    publishDate: '14/Jan/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=otRYcyPbaZM',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.v10f],
    publishDate: '19/Jan/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=RT_XTV4cDFA',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.tesla],
    publishDate: '21/Jan/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=j8oAc5CQrB8',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.mten],
    publishDate: '23/Jan/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=pZbP3iLsw-0',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.chatting, WheelId.v10f],
    publishDate: '11/Feb/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=Y4x3794YDDw',
    tags: [InfluencerId.wrongWay, VideoCategory.comparision, WheelId.v10f, WheelId.tesla],
    publishDate: '15/Feb/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=DO2BJX8dFW8',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.offroad, WheelId.ksS18],
    publishDate: '25/Feb/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=XVnJp46Esac',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.ksS18],
    publishDate: '01/Mar/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=czktG8E0Afg',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.ksS18],
    publishDate: '06/Mar/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=YN5R5sAN36Y',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.tesla],
    publishDate: '08/May/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=L0oPK-0epIA',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, VideoCategory.chatting, WheelId.exnHS, WheelId.exnHT],
    publishDate: '24/Mar/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=718_GpxlKqk',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.exnHS, WheelId.exnHT],
    publishDate: '30/Mar/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=G2opDjBQoCY',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, VideoCategory.chatting, WheelId.ksS18],
    publishDate: '03/Apr/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=lUW5xab9T-A',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.chatting, WheelId.exnHS, WheelId.exnHT],
    publishDate: '12/Apr/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=Y7SmOvX2JXM',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, VideoCategory.chatting, WheelId.rsHS],
    publishDate: '14/Apr/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=IOfo7XHYrag',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.rsHS],
    publishDate: '16/Apr/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=7mPkZz61Of8',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.sherman],
    publishDate: '20/Apr/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=k738MA9E9ck',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.comparision,
      WheelId.nikola,
      WheelId.rsHS,
      WheelId.rsHT,
      WheelId.ks16x,
      WheelId.ksS18,
      WheelId.v11
    ],
    publishDate: '24/Apr/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=pXENLoH92H8',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.rsHS],
    publishDate: '04/May/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=MDr6BjgxlHM',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, WheelId.msp],
    publishDate: '06/May/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=l0Obvor1w4I',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.recioWheel16, WheelId.recioWheel18],
    publishDate: '08/May/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=Vb6Z6rXfHTA',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.offroad, WheelId.msp],
    publishDate: '10/May/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=R5cREOUCmUg',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, VideoCategory.offroad, WheelId.v12],
    publishDate: '17/May/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=q25b8zG6QPc',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, VideoCategory.chatting, WheelId.monsterPro],
    publishDate: '19/May/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=ybDl0xJptS4',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.sherman],
    publishDate: '25/May/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=iPg4i6fJK1Q',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.monsterPro],
    publishDate: '28/May/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=ndjg_uqw8hw',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, VideoCategory.offroad, WheelId.ksS18],
    publishDate: '03/Jun/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=HCJDF8vDs24',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.review,
      VideoCategory.commuting,
      VideoCategory.offroad,
      WheelId.monsterPro
    ],
    publishDate: '05/Jun/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=gEYjFS8toJg',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.review,
      VideoCategory.commuting,
      WheelId.monsterPro
    ],
    publishDate: '10/Jun/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=TUfkOqPDrxk',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.tesla],
    publishDate: '15/Jun/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=7CaNV6xOf2s',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.msp],
    publishDate: '17/Jun/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=SidzG6Go48U',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, VideoCategory.review, WheelId.msp],
    publishDate: '20/Jun/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=6B2o7pQ6gLc',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.sherman],
    publishDate: '01/Jul/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=xtxUWiFXJnQ',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.review,
      VideoCategory.offroad,
      WheelId.recioWheel16,
      WheelId.recioWheel18
    ],
    publishDate: '25/Jul/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=ET2Ex6EOU2k',
    tags: [InfluencerId.wrongWay, VideoCategory.reveal, VideoCategory.review, VideoCategory.commuting, WheelId.tesla],
    publishDate: '03/Aug/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=KhwaoiRL8tE',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.chatting,
      VideoCategory.commuting,
      WheelId.commanderHS,
      WheelId.commanderHT,
      WheelId.ksS20,
      WheelId.abrams,
      WheelId.hero
    ],
    publishDate: '02/Sep/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=XsXG8OY_n5g',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.tesla],
    publishDate: '05/Sep/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=CfhOX21_V7M',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.monsterPro],
    publishDate: '10/Sep/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=ZF5J41jgTYU',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.v12],
    publishDate: '14/Oct/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=CeVLQEUe0oA',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.exnHT],
    publishDate: '22/Oct/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=OO7w7jxpr3g',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.v12],
    publishDate: '24/Oct/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=NIbTy8BPWc4',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.exnHT],
    publishDate: '28/Oct/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=rzdvh_1zRLg',
    tags: [InfluencerId.wrongWay, VideoCategory.chatting, WheelId.v12],
    publishDate: '04/Nov/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=tJS2opmpGmQ',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.exnHT],
    publishDate: '12/Nov/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=9pL1AFbqDhI',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.v12],
    publishDate: '17/Nov/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=RZ9uk278Y_U',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, WheelId.ks14d],
    publishDate: '06/Dec/2021',
    releaseDate: '07/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=edWLjvACjD4',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.reveal,
      VideoCategory.chatting,
      WheelId.commanderHS,
      WheelId.commanderHT
    ],
    publishDate: '07/Dec/2021',
    releaseDate: '09/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=Jf77TQrOnDY',
    tags: [InfluencerId.wrongWay, VideoCategory.review, VideoCategory.commuting, VideoCategory.offroad, WheelId.v11],
    publishDate: '07/Dec/2021',
    releaseDate: '12/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=V4CT-sZ-8hM',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.review,
      VideoCategory.chatting,
      WheelId.commanderHS,
      WheelId.commanderHT
    ],
    publishDate: '07/Dec/2021',
    releaseDate: '16/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=Sn5aPz8nAwA',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.reveal,
      VideoCategory.chatting,
      WheelId.abrams
    ],
    publishDate: '07/Dec/2021',
    releaseDate: '24/Dec/2021',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=9iVM5IRFaeA',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.reveal,
      VideoCategory.chatting,
      WheelId.ks18l
    ],
    publishDate: '12/Jan/2022',
    releaseDate: '16/Jan/2022',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=R3Acms21qlE',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.review,
      VideoCategory.offroad,
      WheelId.commanderHT,
      WheelId.commanderHS
    ],
    publishDate: '15/Jan/2022',
    releaseDate: '16/Jan/2022',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=WxTAq2xFnpk',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.review,
      VideoCategory.offroad,
      WheelId.ks18l,
      WheelId.ks18xl
    ],
    publishDate: '03/Feb/2022',
    releaseDate: '14/Feb/2022',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=J7DJAXhO3L4',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.review,
      VideoCategory.offroad,
      WheelId.ks18l,
      WheelId.ks18xl
    ],
    publishDate: '12/Feb/2022',
    releaseDate: '14/Feb/2022',
    language: 'en'
  },
  {
    url: 'https://www.youtube.com/watch?v=55IUG4q6CLI',
    tags: [
      InfluencerId.wrongWay,
      VideoCategory.review,
      VideoCategory.offroad,
      WheelId.abrams
    ],
    publishDate: '15/Feb/2022',
    releaseDate: '21/Feb/2022',
    language: 'en'
  }
];


export default wrongWayVideos;
