import { Brands, Stores, Wheel, WheelFilters, WheelPictures, WheelPurchaseLinks, WheelSorting } from '../types';

export interface ArenaContextState {
  brands: Brands
  filters: WheelFilters
  pictures: WheelPictures
  purchaseLinks: WheelPurchaseLinks
  sorting: WheelSorting
  stores: Stores
  wheels: Wheel[]
}