import { Brands, Stores, Wheel, WheelPictures, WheelPurchaseLinks } from '../types';

export interface ArenaContextState {
  brands: Brands
  pictures: WheelPictures
  purchaseLinks: WheelPurchaseLinks
  stores: Stores
  wheels: Wheel[]
}