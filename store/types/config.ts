import { Wheel } from '../../types';
import { SpecWeightsPreset } from './settings';

interface ConfigValues {
  /**
   * If the user has not selected any specific preset,
   * this preset will be loaded by default
   */
  defaultPreset: SpecWeightsPreset.generic;

  /**
   * How many wheels can be compared at the same time
   */
  maxComparedWheels: number;

  /**
   * Controls how many items will be displayed on each pagination.
   * 
   * This applies for the following lists:
   * - Videos
   */
  paginationSize: number;
}

interface FeatureFlags {
  /**
   * Should calculate range based on wheel's Wh
   */
  calculatedRange: boolean;

  /**
   * Should display hardcoded prices
   */
  prices: boolean;

  /**
   * Should display all purchase links (even if agreement is in progress)
   */
  purchaseLinks: boolean;
}

interface WheelsListInfo {
  /**
   * Main specs in List view
   */
  mainSpecs: (keyof Wheel)[];

  /**
   * Main specs in List view
   */
  additionalSpecs: (keyof Wheel)[];
}

interface WheelDetailsInfo {
  /**
   * Hightlighted specs in Details view
   */
  highlightedSpecs: (keyof Wheel)[];

  /**
   * Main specs in Details view
   */
  mainSpecs: (keyof Wheel)[];

  /**
   * Main specs in Details view
   */
  additionalSpecs: (keyof Wheel)[];
}

export interface ConfigState {
  configValues: ConfigValues;
  featureFlags: FeatureFlags;
  
  /**
   * Available columns in Table view
   */
  specColumns: Array<keyof Wheel>;

  /**
   * Controls what specs are going to be displayed
   * in Wheels List view
   */
  wheelsListInfo: WheelsListInfo;

  /**
   * Controls what specs are going to be displayed
   * in Wheel Details view
   */
  wheelDetailsInfo: WheelDetailsInfo;
}

export interface SetConfigAction {
  type: 'SET_CONFIG';
  payload: {
    config: ConfigState
  };
}

export type ConfigActions =
  | SetConfigAction;