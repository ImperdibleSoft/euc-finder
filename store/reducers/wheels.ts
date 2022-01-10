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

    case 'ADD_COMPARE_WHEEL':
      const isPresentA = state.comparing.includes(action.payload.wheelId);
      if (isPresentA) {
        return state;
      }

      return {
        ...state,
        comparing: [...state.comparing, action.payload.wheelId]
      };

    case 'REMOVE_COMPARE_WHEEL':
      const isPresentR = state.comparing.includes(action.payload.wheelId);
      if (!isPresentR) {
        return state;
      }

      return {
        ...state,
        comparing: state.comparing.filter(w => w !== action.payload.wheelId)
      };

    case 'RESET_COMPARE':
      return {
        ...state,
        comparing: getWheelsInitialState().comparing
      };
      
    default:
      return state;
  }
};

export default reducer;
