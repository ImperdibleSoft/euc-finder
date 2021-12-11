import { PAGINATION_SIZE } from '../../constants';
import { getCategoryFromTags, getInfluencerFromTags, getWheelFromTags, sortBy } from '../../utils';
import { WheelId } from '../../types';
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
  return collection
    .filter(video => {
      if (!video.url || video.url === '' || video.url === undefined) {
        return false;
      }

      const categoryTags = getCategoryFromTags(video.tags);
      const influencerTags = getInfluencerFromTags(video.tags);
      const wheelTags = getWheelFromTags(video.tags);

      const matchesAllCategories = (
        !categoryTags.length
        || !filters.categories.length
        || filters.categories.every(category => categoryTags.some(cat => cat === category))
      );

      const matchesAnyInfluencers = (
        !influencerTags.length
        || !filters.influencers.length
        || filters.influencers.some(influencerId => influencerTags.some(id => id === influencerId))
      );

      const matchesAnyLanguage = (
        !filters.languages.length
        || filters.languages.some(language => video.language === language)
      );

      const matchesAllWheels = (
        !wheelTags.length
        || !filters.wheels.length
        || filters.wheels.every(wheelId => wheelTags.some(id => id === wheelId))
      );

      if (matchesAllCategories && matchesAnyInfluencers && matchesAnyLanguage && matchesAllWheels) {
        return true;
      }

      return false;
    })
    .sort(sortBy('date', 'desc'));
};

export const getVideoFilters = ({ videos }: RootState) =>
  videos.filters;

export const getPaginatedVideos = (filtered = true) => (rootState: RootState) => {
  const start = rootState.videos.pagination.offset;
  const end = rootState.videos.pagination.offset + PAGINATION_SIZE;

  const allVideos = (filtered ? getFilteredVideos : getVideos)(rootState);
  const videos = allVideos.slice(start, end);

  return {
    videos,
    pagination: {
      ...rootState.videos.pagination,
      count: videos.length,
      total: allVideos.length
    }
  };
};

export const getVideosByWheel = (wheelId: WheelId) =>
  ({ videos }: RootState) =>
    videos.collection.filter(v =>
      v.tags.some(t => t === wheelId)
    )
      .sort(sortBy('date', 'desc'));