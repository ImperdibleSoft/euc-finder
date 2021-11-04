import {
  Brands,
  DiameterUnits,
  GroundClearanceUnits,
  RangeUnits,
  Region,
  SpeedUnits,
  Stores,
  WeightUnits,
  Wheel,
  WheelFilters,
  WheelPictures,
  WheelPurchaseLinks,
  WheelSorting,
  WidthUnits
} from '../types';

export interface ArenaContextState {
  brands: Brands;
  filters: WheelFilters;
  measureUnits: {
    diameter: DiameterUnits;
    groundClearance: GroundClearanceUnits;
    range: RangeUnits;
    maxSpeed: SpeedUnits;
    weight: WeightUnits;
    width: WidthUnits;
  }
  pictures: WheelPictures;
  purchaseLinks: WheelPurchaseLinks;
  region: Region;
  sorting: WheelSorting;
  stores: Stores;
  wheels: Wheel[];
}

export interface ArenaContextType {
  state: ArenaContextState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: React.Dispatch<any>
  disclaimer: {
    open?: boolean,
    handleOpen?: () => void,
    handleClose?: () => void
  }
}