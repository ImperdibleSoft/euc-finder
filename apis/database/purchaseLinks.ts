import { WheelPurchaseLinks } from '../../types';
import { wheelPurchaseLinks as availablePurchaseLinks } from './data';
import fetchDataFromDB from './dataBaseApi';
import { createPurhcaseLinksFromServer } from './modelCreators/purchaseLinks';
import { PurchaseLinkFromServer } from './types/purchaseLinks';

const getAllPurchaseLinks = async (): Promise<WheelPurchaseLinks> => {
  try {
    const data = (await fetchDataFromDB('SELECT id, wheelId, link FROM purchaseLinks')) as PurchaseLinkFromServer[];
    const purchaseLinks = createPurhcaseLinksFromServer(data);
    return purchaseLinks;
  } catch (err) {
    console.error('error', err);
  }

  return availablePurchaseLinks;
};

export const purchaseLinks = {
  /**
   * Return a complete list of available purchase links
   * for any EUC
   */
  getAllPurchaseLinks
};
