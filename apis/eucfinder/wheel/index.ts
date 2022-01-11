import { WheelPurchaseLinks } from '../../../types';
import { http } from '../../../utils';
import { ReturnType as VideosReturnType } from '../videos';
import { price } from './price';

export interface ReturnType extends VideosReturnType {
  purchaseLinks: WheelPurchaseLinks;
}

const getWheel = async (): Promise<ReturnType> => {
  try {
    const response = await http.get<ReturnType>(`/api/wheel`);
    return response.data;
  } catch {
    return {
      influencers: [],
      // @ts-ignore
      purchaseLinks: {},
      videos: []
    };
  }
};

export const wheel = {
  /**
   * Retrieve needed information about a particular wheel,
   * including:
   * - pictures
   * - purchaseLinks
   */
  getWheel,

  /**
   * Any request related to the wheel's price
   */
  price
};