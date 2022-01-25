import { Wheel, WheelsTableColumns } from '../../../types';

let initialValue: WheelsTableColumns;

export const getInitialValue = (listMainSpecs?: (keyof Wheel | undefined)[]): WheelsTableColumns => {
  if (listMainSpecs) {
    initialValue = {
      diameter: listMainSpecs.some(f => f ===  'diameter'),
      width: listMainSpecs.some(f => f ===  'width'),
      maxSpeed: listMainSpecs.some(f => f ===  'maxSpeed'),
      range: listMainSpecs.some(f => f ===  'range'),
      weight: listMainSpecs.some(f => f ===  'weight'),
    
      ratedPower: listMainSpecs.some(f => f ===  'ratedPower'),
      battery: listMainSpecs.some(f => f ===  'battery'),
      voltage: listMainSpecs.some(f => f ===  'voltage'),
      maxGradibility: listMainSpecs.some(f => f ===  'maxGradibility'),
      groundClearance: listMainSpecs.some(f => f ===  'groundClearance'),
      suspension: listMainSpecs.some(f => f ===  'suspension'),

      headlight: listMainSpecs.some(f => f ===  'headlight'),
      tailLight: listMainSpecs.some(f => f ===  'tailLight'),
      trolleyHandle: listMainSpecs.some(f => f ===  'trolleyHandle'),
      sizes: listMainSpecs.some(f => f?.includes('sizes')),
      pedals: listMainSpecs.some(f => f === 'pedals'),
      antiSpin: listMainSpecs.some(f => f ===  'antiSpin'),
      kickstand: listMainSpecs.some(f => f ===  'kickstand'),
      leds: listMainSpecs.some(f => f ===  'leds'),
      sound: listMainSpecs.some(f => f ===  'sound'),
      display: listMainSpecs.some(f => f === 'display'),
      color: listMainSpecs.some(f => f ===  'color')
    };
  }

  return initialValue;
};

interface ResetColumns {
  type: 'reset';
}

interface ShowColumn {
  type: 'show';
  payload: {
    key: keyof WheelsTableColumns;
  }
}

interface HideColumn {
  type: 'hide';
  payload: ShowColumn['payload'];
}

type TableActions = ResetColumns | ShowColumn | HideColumn;

const wheelsTableSettingsReducer = (state: WheelsTableColumns, action: TableActions): WheelsTableColumns => {
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
