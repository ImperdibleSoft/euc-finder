import { getMeasureUnitsDefaultValue, getSettingsInitialState } from '../models';
import { SettingsAction, SettingsState } from '../types';

const reducer = (state = getSettingsInitialState(), action: SettingsAction): SettingsState => {
  switch (action.type) {
    case 'DEFAULT_MEASURE_UNITS':
      return {
        ...state,
        measureUnits: { ...getMeasureUnitsDefaultValue() }
      };

    case 'RESET_MEASURE_UNITS':
      return {
        ...state,
        measureUnits: { ...getSettingsInitialState().measureUnits }
      };

    case 'SET_MEASURE_UNIT':
      return {
        ...state,
        measureUnits: {
          ...state.measureUnits,
          [action.payload.key]: action.payload.value
        }
      };

    case 'SET_REGION':
      return {
        ...state,
        region: action.payload.region
      };

    case 'SET_SPECWEIGHTS_PRESET':
      return {
        ...state,
        specWeights: {
          ...state.specWeights,
          preset: action.payload.preset
        }
      };

    case 'SET_CUSTOM_SPECWEIGHT':
      return {
        ...state,
        specWeights: {
          ...state.specWeights,
          customValues: {
            ...state.specWeights.customValues,
            [action.payload.key]: action.payload.value
          }
        }
      };
        
    default:
      return state;
  }
};

export default reducer;
