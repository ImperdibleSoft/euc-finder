import { createDate, getCategoryFromTags, getInfluencerFromTags, getWheelFromTags, sortBy } from '../../utils';
import { Influencer, InfluencerId, Video, WheelId } from '../../types';
import { RootState } from '../types';
import { getPromotedInfluencers } from './influencers';
import { getPaginationConfig } from './config';

export const getVideos = ({ videos }: RootState) =>
  videos.collection;

export const getVideosLastVisit = ({ videos }: RootState) =>
  videos.lastVisit;

export const getVideosWithout = (rootState: RootState) => {
  const influencers = getPromotedInfluencers(rootState);

  return getVideos(rootState).filter(v =>
    v.tags.some(t =>
      influencers.some(i =>
        i.id === t && i.promoted !== false
      )
    )
  );
};

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

const isPromoted = (video: Video, influencers: Influencer[]) =>
  influencers
    .filter(i => video.tags.some(t => t === i.id))
    .some(i => i.promoted);

export const getPromotedVideos = () => (rootState: RootState) => {
  const start = rootState.videos.pagination.promotedOffset;
  const end = rootState.videos.pagination.promotedOffset + getPaginationConfig(rootState);

  const allVideos = getFilteredVideos(rootState);
  const promotedVideos = allVideos.filter(video => isPromoted(video, rootState.influencers.collection));
  const videos = promotedVideos.slice(start, end);

  return {
    videos,
    pagination: {
      ...rootState.videos.pagination,
      count: videos.length,
      total: promotedVideos.length
    }
  };
};

export const getNewVideos = (fromDate?: Date, shouldPaginate = true) =>
  (rootState: RootState) => {
    const lastVisit = fromDate ?? getVideosLastVisit(rootState);
    const start = rootState.videos.pagination.unwatchedOffset;
    const end = rootState.videos.pagination.unwatchedOffset + getPaginationConfig(rootState);

    const allVideos = getFilteredVideos(rootState);
    const newVideos = lastVisit
      ? allVideos.filter(video =>
        !isPromoted(video, rootState.influencers.collection)
        && createDate(video.releaseDate) > lastVisit
      )
      : allVideos;
    const videos = shouldPaginate ? newVideos.slice(start, end) : newVideos;

    return {
      videos,
      pagination: {
        ...rootState.videos.pagination,
        count: videos.length,
        total: newVideos.length
      }
    };
  };

export const getNewVideosLength = (fromDate?: Date) =>
  (rootState: RootState) =>
    getNewVideos(fromDate, false)(rootState).videos.length;

export const getWatchedVideos = (fromDate?: Date) =>
  (rootState: RootState) => {
    const lastVisit = fromDate ?? getVideosLastVisit(rootState);
    const start = rootState.videos.pagination.watchedOffset;
    const end = rootState.videos.pagination.watchedOffset + getPaginationConfig(rootState);

    const allVideos = getFilteredVideos(rootState);
    const watchedVideos = lastVisit
      ? allVideos.filter(video =>
        !isPromoted(video, rootState.influencers.collection)
        && (createDate(video.releaseDate) <= lastVisit)
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
