import { Brands, Region, Stores, Wheel, WheelFilters, WheelPictures, WheelPurchaseLinks, WheelSorting } from '../types';

export interface ArenaContextState {
  brands: Brands
  filters: WheelFilters
  pictures: WheelPictures
  purchaseLinks: WheelPurchaseLinks
  region: Region
  sorting: WheelSorting
  stores: Stores
  wheels: Wheel[]
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