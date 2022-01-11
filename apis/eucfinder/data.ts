import { App, Brand, Influencer, Store, Video, Wheel, WheelPurchaseLinks } from '../../types';
import { http } from '../../utils';

export interface ReturnType  {
  apps: App[],
  brands: Brand[],
  dealers: Store[],
  influencers: Influencer[],
  purchaseLinks: WheelPurchaseLinks,
  videos: Video[],
  wheels: Wheel[]
}

const getInitialData = async (): Promise<ReturnType> => {
  try {
    const response = await http.get<ReturnType>(`/api/initialData`);
    return response.data;
  } catch {
    return {
      apps: [],
      brands: [],
      dealers: [],
      influencers: [],
      // @ts-ignore
      purchaseLinks: {},
      videos: [],
      wheels: []
    };
  }
};

export const data = {
  /**
   * Retrieve needed information about a particular wheel,
   * including:
   * - apps
   * - brands
   * - dealers
   * - influencers
   * - purchaseLinks
   * - videos
   * - wheels
   */
  getInitialData
};