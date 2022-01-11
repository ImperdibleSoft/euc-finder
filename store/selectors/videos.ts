import { getCategoryFromTags, getInfluencerFromTags, getWheelFromTags, sortBy } from '../../utils';
import { Influencer, InfluencerId, Video, WheelId } from '../../types';
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
    .sort(sortBy('publishDate', 'desc'));
};

export const getVideoFilters = ({ videos }: RootState) =>
  videos.filters;

const isSponsored = (video: Video, influencers: Influencer[]) =>
  influencers
    .filter(i => video.tags.some(t => t === i.id))
    .some(i => i.sponsored);

export const getSponsoredVideos = () => (rootState: RootState) => {
  const start = rootState.videos.pagination.sponsoredOffset;
  const end = rootState.videos.pagination.sponsoredOffset + rootState.config.paginationSize;

  const allVideos = getFilteredVideos(rootState);
  const sponsoredVideos = allVideos.filter(video => isSponsored(video, rootState.influencers.collection));
  const videos = sponsoredVideos.slice(start, end);

  return {
    videos,
    pagination: {
      ...rootState.videos.pagination,
      count: videos.length,
      total: sponsoredVideos.length
    }
  };
};

export const getNewVideos = (lastVisit?: Date) => (rootState: RootState) => {
  const start = rootState.videos.pagination.newOffset;
  const end = rootState.videos.pagination.newOffset + rootState.config.paginationSize;

  const allVideos = getFilteredVideos(rootState);
  const newVideos = lastVisit
    ? allVideos.filter(video =>
      !isSponsored(video, rootState.influencers.collection) &&
      new Date(video.releaseDate) > lastVisit
    )
    : allVideos;
  const videos = newVideos.slice(start, end);

  return {
    videos,
    pagination: {
      ...rootState.videos.pagination,
      count: videos.length,
      total: newVideos.length
    }
  };
};

export const getWatchedVideos = (lastVisit?: Date) => (rootState: RootState) => {
  const start = rootState.videos.pagination.watchedOffset;
  const end = rootState.videos.pagination.watchedOffset + rootState.config.paginationSize;

  const allVideos = getFilteredVideos(rootState);
  const watchedVideos = lastVisit
    ? allVideos.filter(video =>
      !isSponsored(video, rootState.influencers.collection) &&
      new Date(video.releaseDate) <= lastVisit
    )
    : [];
  const videos = watchedVideos.slice(start, end);

  return {
    videos,
    pagination: {
      ...rootState.videos.pagination,
      count: videos.length,
      total: watchedVideos.length
    }
  };
};

export const getVideosByInfluencer = (influencerId: InfluencerId) =>
  ({ videos }: RootState) =>
    videos.collection.filter(v =>
      !!v.url &&
      v.tags.some(t => t === influencerId)
    )
      .sort(sortBy('publishDate', 'desc'));

export const getVideosByWheel = (wheelId: WheelId) =>
  ({ videos }: RootState) =>
    videos.collection.filter(v =>
      !!v.url &&
      v.tags.some(t => t === wheelId)
    )
      .sort(sortBy('publishDate', 'desc'));