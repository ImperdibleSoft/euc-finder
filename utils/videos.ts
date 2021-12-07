import { Video } from '../types';

export const getEmbedPath = (video: Video) => {
  const { url } = video;
  const [, videoId] = url.match(/.*\?v=([a-zA-Z0-9\_\-]*)(\&.*)?$/) ?? [];


  return {
    ...video,
    url: `https://www.youtube.com/embed/${ videoId }`
  };
};