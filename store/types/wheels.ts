import {
  Brands,
  Store,
  Wheel,
  WheelFilters,
  WheelPictures,
  WheelPurchaseLinks,
  WheelSorting
} from '../../types';

export interface WheelsState {
  // Main data
  brands: Brands;
  collection: Wheel[];
  pictures: WheelPictures;
  purchaseLinks: WheelPurchaseLinks;
  stores: Store[];

  // Misc
  filters: WheelFilters;
  sorting: WheelSorting;
}

export interface SortWheelsAction {
  type: 'SORT_WHEELS';
  payload: WheelSorting;
}

export interface ResetWheelsFiltersAction {
  type: 'RESET_WHEEL_FILTERS'
}

export interface FilterWheelsAction {
  type: 'FILTER_WHEELS';
  payload: {
    key: keyof WheelFilters;
    value: unknown
  }
}

export type WheelsAction = SortWheelsAction | ResetWheelsFiltersAction | FilterWheelsAction