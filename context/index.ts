import React, { useContext, useReducer } from 'react';
import { getInitialValue } from './models';
import arenaContextReducer from './reducer';
import { ArenaContextType } from './types';


const ArenaContext = React.createContext<ArenaContextType>({
  state: getInitialValue(),
  dispatch: () => { return; },
  disclaimer: {}
});

export const ArenaContextProvider = ArenaContext.Provider;

export const useArenaContext = () => {
  const { state, dispatch, disclaimer } = useContext(ArenaContext);

  return {
    ...state,
    dispatch,
    disclaimer 
  };
};

export const useContextReducer = () => {
  const [state, dispatch] = useReducer(arenaContextReducer, getInitialValue()); 

  return {
    state,
    dispatch
  };
};