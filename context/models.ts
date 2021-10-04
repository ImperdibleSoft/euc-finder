import { brands, stores, wheelPictures, wheelPurchaseLinks, wheels } from './data';
import { ArenaContextState } from './types';

export const initialValue: ArenaContextState = {
  brands,
  pictures: wheelPictures,
  purchaseLinks: wheelPurchaseLinks,
  stores,
  wheels
};