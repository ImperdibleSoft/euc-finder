import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLastVisit } from '../../store/actions';
import {
  getBrands,
  getInfluencers,
  getNewVideos,
  getPaginationConfig,
  getSponsoredVideos,
  getVideosLastVisit,
  getWatchedVideos,
  getWheels
} from '../../store/selectors';
import { Influencer, Video, Wheel } from '../../types';
import {
  formatWheelName,
  getCategoryFromTags,
  getInfluencerFromTags,
  getLastVisit,
  getToday,
  getWheelFromTags,
  setLastVisit as updateLastVisit
} from '../../utils';

export * from './filtering';

export const useVideos = () => {
  const dispatch = useDispatch();
  const [lastVisit] = useState(getLastVisit());
  const liveLastVisit = useSelector(getVideosLastVisit);
  const sponsored = useSelector(getSponsoredVideos());
  const unwatched = useSelector(getNewVideos(lastVisit));
  const watched = useSelector(getWatchedVideos(lastVisit));
  const paginationSize = useSelector(getPaginationConfig);

  useEffect(() => {
    const lastDate = getToday();

    if (localStorage) {
      updateLastVisit(lastDate);
    }
    
    dispatch(setLastVisit({ lastVisit: lastDate }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loaded: !!liveLastVisit,
    sponsored,
    unwatched,
    watched,
    paginationSize
  };
};

export const useVideoInfo = ({ tags }: Video) => {
  const { t } = useTranslation();
  const brands = useSelector(getBrands);
  const influencers = useSelector(getInfluencers);
  const wheels = useSelector(getWheels);
  
  const taggedInfo = useMemo(() =>
    ({
      categories: getCategoryFromTags(tags)
        .map(tag => ({
          id: tag,
          label: t(`${ tag }-label`)
        })),
      influencers: getInfluencerFromTags(tags)
        .map(influencerId => {
          const influencer = influencers.find(i => i.id === influencerId);
          return influencer;
        })
        .filter(i => !!i) as Influencer[],
      wheels: getWheelFromTags(tags)
        .map(wheelId => {
          const wheel = wheels.find(w => w.id === wheelId);
          return wheel ? { ...wheel, name: formatWheelName(wheel, brands) } : undefined;
        })
        .filter(w => !!w) as Wheel[]
    }), [brands, influencers, t, tags, wheels]
  );

  return taggedInfo;
};