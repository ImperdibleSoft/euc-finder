import { WheelPurchaseLinks } from '../../types';
import { wheelPurchaseLinks as availablePurchaseLinks } from './data';

const getAllPurchaseLinks = async (): Promise<WheelPurchaseLinks> => availablePurchaseLinks;

export const purchaseLinks = {
  /**
   * Return a complete list of available purchase links
   * for any EUC
   */
  getAllPurchaseLinks
};