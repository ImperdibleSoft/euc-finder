import { BrandId, WheelFilters } from '../../../types';

const initialValue: WheelFilters = {
  brandId: Object.values(BrandId),
  maxPrice: undefined,
  minPrice: undefined,

  minPower: undefined,
  maxMaxSpeed: undefined,
  minMaxSpeed: undefined,
  minBatteryOutput: undefined,
  minRange: undefined,
  minVoltage: undefined,

  maxDiameter: undefined,
  minDiameter: undefined,
  maxWeight: undefined,
  suspension: undefined,
  antiSpin: undefined,
  kickstand: undefined,
  trolleyHandle: undefined,
  maxGroundClearance: undefined,
  minGroundClearance: undefined,
  leds: undefined,
  sound: undefined,
  display: undefined,
  battery: undefined
};

export const getInitialValue = () => ({ ...initialValue });

const wheelsTableFiltersReducer = (state: WheelFilters = initialValue, action: any): WheelFilters => {
  switch (action?.type) {
    case 'reset':
      return getInitialValue();
      
    case 'filter':
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default wheelsTableFiltersReducer;