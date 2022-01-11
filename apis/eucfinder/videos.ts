import { Influencer, Video } from '../../types';
import { http } from '../../utils';

export interface ReturnType {
  influencers: Influencer[];
  videos: Video[];
}

const getVideos = async (): Promise<ReturnType> => {
  try {
    const response = await http.get<ReturnType>('/api/videos');
    return response.data;
  } catch {
    return {
      influencers: [],
      videos: []
    };
  }
};

export const videos = {
  /**
   * Retrieve needed information about videos and influencers
   * so the Videos page can be rendered, including:
   * - influencers
   * - videos
   */
  getVideos
};