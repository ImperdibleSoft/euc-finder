import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getBrands, getInfluencers, getVideos, getWheels } from '../../store/selectors';
import { Categories, Video } from '../../types';
import { formatWheelName } from '../../utils';

const getCategories = () => Object.values(Categories);

const getEmbedPath = (video: Video) => {
  const { url } = video;
  const [, videoId] = url.match(/.*\?v=([a-zA-Z0-9\_]*)(\&.*)?$/) ?? [];


  return {
    ...video,
    url: `https://www.youtube.com/embed/${ videoId }`
  };
};

export const useVideos = () => {
  const videos = useSelector(getVideos);

  return { videos: videos.map(getEmbedPath) };
};

export const useVideoInfo = ({ tags, url }: Video) => {
  const brands = useSelector(getBrands);
  const influencers = useSelector(getInfluencers);
  const wheels = useSelector(getWheels);
  
  const taggedInfluencers = useMemo(() => {
    return influencers.filter(influencer => tags.some(tag => influencer.id === tag));
  }, [influencers, tags]);

  const taggedWheels = useMemo(() => {
    return wheels.filter(wheel => tags.some(tag => wheel.id === tag));
  }, [wheels, tags]);

  const categories = tags.filter(tag => getCategories().some(category => category === tag));

  return {
    url,
    influencers: taggedInfluencers,
    categories,
    wheels: taggedWheels.map(w => ({ ...w, name: formatWheelName(w, brands) }))
  };
};