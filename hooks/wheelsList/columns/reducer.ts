import { DETAIL_HIGHLIGHTED_SPECS } from '../../../constants';
import { WheelsTableColumns } from '../../../types';

const initialValue: WheelsTableColumns = {
  diameter: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'diameter'),
  width: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'width'),

  maxSpeed: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'maxSpeed'),
  
  range: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'range'),
  weight: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'weight'),
  
  ratedPower: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'ratedPower'),
  maxGradibility: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'maxGradibility'),
  voltage: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'voltage'),
  battery: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'battery'),
  batteryOutput: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'batteryOutput'),

  color: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'color'),
  trolleyHandle: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'trolleyHandle'),
  antiSpin: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'antiSpin'),
  kickstand: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'kickstand'),
  suspension: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'suspension'),

  groundClearance: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'groundClearance'),

  headlight: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'headlight'),
  tailLight: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'tailLight'),
  leds: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'leds'),
  sound: DETAIL_HIGHLIGHTED_SPECS.some(f => f ===  'sound'),
  display: DETAIL_HIGHLIGHTED_SPECS.some(f => f === 'display')
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