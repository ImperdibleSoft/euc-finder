import { RootState } from '../types';

export const getVideos = ({ videos }: RootState) =>
  videos.collection;

export const getVideosWithout = ({ influencers, videos }: RootState) =>
  videos.collection.filter(v => {
    return v.tags
      .some(t => influencers.collection
        .some(i => i.id === t && i.sponsored !== false)
      );
  });

export const getSponsoredVideos = ({ influencers, videos }: RootState) =>
  videos.collection.filter(v => {
    return v.tags
      .some(t => influencers.collection
        .some(i => i.id === t && i.sponsored === true)
      );
  });