import { Wheel } from '../../types';

export interface ConfigState {
  /**
   * Should calculate range based on wheel's Wh
   */
  calculatedRange: boolean,
  paginationSize: number,

  /**
   * Should display hardcoded prices
   */
  prices: boolean,

  /**
   * Should display all purchase links (even if agreement is in progress)
   */
  purchaseLinks: boolean,

  /**
   * How many wheels can be compared at the same time
   */
  maxComparedWheels: number,

  /**
   * Available columns in Table view
   */
  specColumns: Array<keyof Wheel>

  /**
   * Main specs in List view
   */
  listMainSpecs: (keyof Wheel)[]

  /**
   * Main specs in List view
   */
  listAdditionalSpecs: (keyof Wheel)[]

  /**
   * Hightlighted specs in Details view
   */
  detailHighlightedSpecs: (keyof Wheel)[]

  /**
   * Main specs in Details view
   */
  detailMainSpecs: (keyof Wheel)[]

  /**
   * Main specs in Details view
   */
  detailAdditionalSpecs: (keyof Wheel)[]
}

export interface SetConfigInitialDataAction {
  type: 'SET_INITIALDATA';
  payload: {
    config: ConfigState
  };
}

export type ConfigActions = SetConfigInitialDataAction;