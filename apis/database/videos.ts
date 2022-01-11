import { Video } from '../../types';
import { videos as availableVideos } from './data';

const getAllVideos = async (): Promise<Video[]> => availableVideos;

export const videos = {
  /**
   * Return a complete list of available curated videos
   * related to any EUCs
   */
  getAllVideos
};