import { DETAIL_HIGHLIGHTED_SPECS } from '../../../constants';
import { WheelsTableColumns } from '../../../types';

const initialValue: WheelsTableColumns = {
  diameter: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'diameter'),
  width: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'width'),
  maxSpeed: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'maxSpeed'),
  range: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'range'),
  weight: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'weight'),
  
  ratedPower: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'ratedPower'),
  battery: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'battery'),
  batterySetup: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'batterySetup'),
  voltage: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'voltage'),
  maxGradibility: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'maxGradibility'),
  groundClearance: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'groundClearance'),
  suspension: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'suspension'),

  headlight: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'headlight'),
  tailLight: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'tailLight'),
  trolleyHandle: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'trolleyHandle'),
  antiSpin: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'antiSpin'),
  kickstand: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'kickstand'),
  leds: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'leds'),
  sound: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'sound'),
  display: DETAIL_HIGHLIGHTED_SPECS.some(f => f === 'display'),
  color: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'color')
};

export const getInitialValue = () => ({ ...initialValue });

const wheelsTableSettingsReducer = (state: WheelsTableColumns = initialValue, action: any): WheelsTableColumns => {
  switch (action?.type) {
    case 'reset':
      return getInitialValue();
      
    case 'show':
      return {
        ...state,
        [action.payload.key]: true
      };

    case 'hide':
      return {
        ...state,
        [action.payload.key]: false
      };

    default:
      return state;
  }
};

export default wheelsTableSettingsReducer;