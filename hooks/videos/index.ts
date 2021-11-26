import { useArenaContext } from '../../context';
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
  const { videos } = useArenaContext();

  return { videos: videos.map(getEmbedPath) };
};

export const useVideoInfo = ({ tags, url }: Video) => {
  const { brands, influencers, wheels } = useArenaContext();
  
  const taggedInfluencers = influencers.filter(influencer => tags.some(tag => influencer.id === tag));
  const taggedWheels = wheels.filter(wheel => tags.some(tag => wheel.id === tag));
  const categories = tags.filter(tag => getCategories().some(category => category === tag));

  return {
    url,
    influencers: taggedInfluencers,
    categories,
    wheels: taggedWheels.map(w => ({ ...w, name: formatWheelName(w, brands) }))
  };
};