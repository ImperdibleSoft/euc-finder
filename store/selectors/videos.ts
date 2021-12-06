import { InfluencerId, VideoCategory, WheelId } from '../../types';
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
  const categories = Object.values(VideoCategory);
  const influencers =  Object.values(InfluencerId);
  const wheels = Object.values(WheelId);

  return collection.filter(video => {
    const categoryTags = video.tags.filter(tag => categories.some(category => category === tag));
    const influencerTags = video.tags.filter(tag => influencers.some(id => id === tag));
    const wheelTags = video.tags.filter(tag => wheels.some(id => id === tag));

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