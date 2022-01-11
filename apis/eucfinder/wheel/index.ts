import { WheelId, WheelPurchaseLinks } from '../../../types';
import { http } from '../../../utils';
import { ReturnType as VideosReturnType } from '../videos';
import { price } from './price';

export interface ReturnType extends VideosReturnType {
  pictures: string[];
  purchaseLinks: WheelPurchaseLinks;
}

const getWheel = async (wheelId: WheelId): Promise<ReturnType | undefined> => {
  try {
    const response = await http.get<ReturnType>(`/api/wheel/${ wheelId }`);
    return response.data;
  } catch {
    return undefined;
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