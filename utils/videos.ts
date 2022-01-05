import { Video } from '../types';

export const getEmbedPath = (video: Video) => {
  const { url } = video;
  const [, videoId] = url.match(/.*v=([a-zA-Z0-9\_\-]*)(\&.*)?$/) ?? [];
  const [, start = 0] = url.match(/.*t=([0-9]*)s(\&.*)?$/) ?? [];

  return {
    ...video,
    url: `https://www.youtube.com/embed/${ videoId }?start=${ start }`
  };
};