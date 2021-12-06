import { getCategoryFromTags, getInfluencerFromTags, getWheelFromTags } from '../../utils';
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

export const getFilteredVideos = ({ videos: { collection, filters } }: RootState) => {
  return collection.filter(video => {
    const categoryTags = getCategoryFromTags(video.tags);
    const influencerTags = getInfluencerFromTags(video.tags);
    const wheelTags = getWheelFromTags(video.tags);

    const matchesAllCategories = (
      !categoryTags.length
      || !filters.categories.length
      || filters.categories.every(category => categoryTags.some(cat => cat === category))
    );

    const matchesAllInfluencers = (
      !influencerTags.length
      || !filters.influencers.length
      || filters.influencers.every(influencerId => influencerTags.some(id => id === influencerId))
    );

    const matchesAllWheels = (
      !wheelTags.length
      || !filters.wheels.length
      || filters.wheels.every(wheelId => wheelTags.some(id => id === wheelId))
    );

    if (matchesAllCategories && matchesAllInfluencers && matchesAllWheels) {
      return true;
    }

    return false;
  });};