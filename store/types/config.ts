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
   * Available columns in Table view
   */
  specColumns: Array<keyof Wheel>

  /**
   * Main specs in List view
   */
  listMainSpecs: (keyof Wheel | undefined)[]

  /**
   * Main specs in List view
   */
   listAdditionalSpecs: (keyof Wheel)[]

  /**
   * Hightlighted specs in Details view
   */
   detailHighlightedSpecs: (keyof Wheel | undefined)[]

  /**
   * Main specs in Details view
   */
   detailMainSpecs: (keyof Wheel | undefined)[]

  /**
   * Main specs in Details view
   */
   detailAdditionalSpecs: (keyof Wheel | undefined)[]
}