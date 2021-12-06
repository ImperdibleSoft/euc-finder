import { InfluencerId, VideoCategory, WheelId } from '../types';

const categories = Object.values(VideoCategory);
const influencers =  Object.values(InfluencerId);
const wheels = Object.values(WheelId);

export const getCategoryFromTags = (tags: string[]): VideoCategory[] =>
  tags.filter(tag => categories.some(id => id === tag)) as VideoCategory[];

export const getInfluencerFromTags = (tags: string[]): InfluencerId[] =>
  tags.filter(tag => influencers.some(id => id === tag)) as InfluencerId[];

export const getWheelFromTags = (tags: string[]): WheelId[] =>
  tags.filter(tag => wheels.some(id => id === tag)) as WheelId[];