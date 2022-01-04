import {
  App,
  Brands,
  Store,
  Wheel,
  WheelFilters,
  WheelPurchaseLinks,
  WheelSorting
} from '../../types';

export interface WheelsState {
  // Main data
  apps: {
    official: App[];
    unofficial: App[];
  };
  brands: Brands;
  collection: Wheel[];
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