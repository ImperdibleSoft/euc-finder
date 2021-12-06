import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getBrands, getFilteredVideos, getInfluencers, getWheels } from '../../store/selectors';
import { Influencer, Video, Wheel } from '../../types';
import { formatWheelName, getCategoryFromTags, getInfluencerFromTags, getWheelFromTags } from '../../utils';

const getEmbedPath = (video: Video) => {
  const { url } = video;
  const [, videoId] = url.match(/.*\?v=([a-zA-Z0-9\_]*)(\&.*)?$/) ?? [];


  return {
    ...video,
    url: `https://www.youtube.com/embed/${ videoId }`
  };
};

export const useVideos = () => {
  const videos = useSelector(getFilteredVideos);

  return { videos: videos.map(getEmbedPath) };
};

export const useVideoInfo = ({ tags, url }: Video) => {
  const brands = useSelector(getBrands);
  const influencers = useSelector(getInfluencers);
  const wheels = useSelector(getWheels);
  
  const taggedInfo = useMemo(() =>
    ({
      categories: getCategoryFromTags(tags),
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
    }), [brands, influencers, tags, wheels]
  );

  return {
    url,
    ...taggedInfo
  };
};