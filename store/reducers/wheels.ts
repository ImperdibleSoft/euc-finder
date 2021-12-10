import { getWheelsInitialState } from '../models';
import { WheelsAction, WheelsState } from '../types';

const reducer = (state = getWheelsInitialState(), action: WheelsAction): WheelsState => {
  switch (action.type) {
    case 'FILTER_WHEELS':
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value
        }
      };

    case 'RESET_WHEEL_FILTERS':
      return {
        ...state,
        filters: { ...getWheelsInitialState().filters }
      };
    
    case 'SORT_WHEELS':
      return {
        ...state,
        sorting: {
          ...state.sorting,
          key: action.payload.key,
          order: action.payload.order
        }
      };
      
    default:
      return state;
  }
};

export default reducer;
