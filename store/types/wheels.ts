import {
  App,
  Brands,
  Store,
  Wheel,
  WheelFilters,
  WheelId,
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
  comparing: WheelId[];
  purchaseLinks: WheelPurchaseLinks;
  stores: Store[];

  // Misc
  filters: WheelFilters;
  sorting: WheelSorting;
}

export interface SetWheelsInitialData {
  type: 'SET_WHEELS_INITIALDATA',
  payload: {
    apps: App[],
    brands: Brands,
    dealers: Store[];
    wheels: Wheel[]
  }
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

export interface AddWheelToComparisionAction {
  type: 'ADD_COMPARE_WHEEL',
  payload: {
    wheelId: WheelId
  }
}

export interface RemoveWheelToComparisionAction {
  type: 'REMOVE_COMPARE_WHEEL',
  payload: {
    wheelId: WheelId
  }
}

export interface ResetComparisionAction {
  type: 'RESET_COMPARE'
}

export type WheelsAction =
  | SetWheelsInitialData
  | SortWheelsAction
  | ResetWheelsFiltersAction
  | FilterWheelsAction
  | AddWheelToComparisionAction
  | RemoveWheelToComparisionAction
  | ResetComparisionAction;