import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getBrands, getInfluencers, getWheels } from '../../store/selectors';
import { Influencer, Video, Wheel } from '../../types';
import { formatWheelName, getCategoryFromTags, getInfluencerFromTags, getWheelFromTags } from '../../utils';

export * from './filtering';

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