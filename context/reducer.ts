import { getFiltersInitialValue, getSortingInitialValue } from './models';
import { ArenaContextState } from './types';

const arenaContextReducer = (state: ArenaContextState, action: any): ArenaContextState => {
  switch (action?.type) {
    case 'reset':
      return {
        ...state,
        filters: getFiltersInitialValue(),
        sorting: getSortingInitialValue()
      };
      
    case 'filter':
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };

    default:
      return state;
  }
};

export default arenaContextReducer;