import { InfluencerId } from '../../types';
import { InfluencersState } from '../types';

export const getInfluencersInitialState = (): InfluencersState => ({
  collection: [
    {
      channel: 'https://www.youtube.com/channel/UC2RaB95OJ2j3-o-JJubz0qw',
      id: InfluencerId.wrongWay,
      name: 'Wrong Way',
      avatar: 'https://yt3.ggpht.com/ytc/AKedOLQP2W4s93R1YJOiDKaVFVmxQA9oSYdL1SVWMthAHlA=s88-c-k-c0x00ffffff-no-rj'
    },
    {
      channel: 'https://www.youtube.com/channel/UC_XZvw2sCJWEfEiG7aTDnPA',
      id: InfluencerId.ox,
      name: 'A film by OX',
      avatar: 'https://yt3.ggpht.com/ytc/AKedOLSwlGKsiwJvgtmuz298QsPt5ojSWPe42qQxhylUiQ=s88-c-k-c0x00ffffff-no-rj',
      sponsored: true
    },
    {
      channel: 'https://www.youtube.com/channel/UCfsmUHp1lI4s_8qpMJwF6ng',
      id: InfluencerId.kuji,
      name: 'Kuji Roll',
      avatar: 'https://yt3.ggpht.com/ytc/AKedOLQ0cSBFo5yGeC1lU3-qlG8UeNkCvdBzPt6DR6tbLQ=s88-c-k-c0x00ffffff-no-rj'
    }
  ]
});