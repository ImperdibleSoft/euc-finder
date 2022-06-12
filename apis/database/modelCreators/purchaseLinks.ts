import { WheelId, WheelPurchaseLinks } from '../../../types';
import { PurchaseLinkFromServer } from '../types/purchaseLinks';

export const createPurhcaseLinksFromServer = (purchaseLinks: PurchaseLinkFromServer[]): WheelPurchaseLinks => {
  const records = {} as WheelPurchaseLinks;

  purchaseLinks.forEach(purchaseLink => {
    const wheelId = purchaseLink.wheelId as WheelId;

    if (!records[wheelId]) {
      records[wheelId] = [];
    }

    if (purchaseLink.link) {
      records[wheelId].push(`${ purchaseLink.link }`);
    }
  });

  return records;
};
