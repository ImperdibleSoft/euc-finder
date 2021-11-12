import { LIST_MAIN_SPECS } from '../../../constants';
import { WheelsTableColumns } from '../../../types';

const initialValue: WheelsTableColumns = {
  diameter: LIST_MAIN_SPECS.some(f => f ===  'diameter'),
  width: LIST_MAIN_SPECS.some(f => f ===  'width'),
  maxSpeed: LIST_MAIN_SPECS.some(f => f ===  'maxSpeed'),
  range: LIST_MAIN_SPECS.some(f => f ===  'range'),
  weight: LIST_MAIN_SPECS.some(f => f ===  'weight'),
  
  ratedPower: LIST_MAIN_SPECS.some(f => f ===  'ratedPower'),
  battery: LIST_MAIN_SPECS.some(f => f ===  'battery'),
  batterySetup: LIST_MAIN_SPECS.some(f => f ===  'batterySetup'),
  voltage: LIST_MAIN_SPECS.some(f => f ===  'voltage'),
  maxGradibility: LIST_MAIN_SPECS.some(f => f ===  'maxGradibility'),
  groundClearance: LIST_MAIN_SPECS.some(f => f ===  'groundClearance'),
  suspension: LIST_MAIN_SPECS.some(f => f ===  'suspension'),

  headlight: LIST_MAIN_SPECS.some(f => f ===  'headlight'),
  tailLight: LIST_MAIN_SPECS.some(f => f ===  'tailLight'),
  trolleyHandle: LIST_MAIN_SPECS.some(f => f ===  'trolleyHandle'),
  antiSpin: LIST_MAIN_SPECS.some(f => f ===  'antiSpin'),
  kickstand: LIST_MAIN_SPECS.some(f => f ===  'kickstand'),
  leds: LIST_MAIN_SPECS.some(f => f ===  'leds'),
  sound: LIST_MAIN_SPECS.some(f => f ===  'sound'),
  display: LIST_MAIN_SPECS.some(f => f === 'display'),
  color: LIST_MAIN_SPECS.some(f => f ===  'color')
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