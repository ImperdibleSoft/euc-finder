import React, { useContext, useReducer } from 'react';
import { getInitialValue } from './models';
import arenaContextReducer from './reducer';

const ArenaContext = React.createContext({
  state: getInitialValue(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: (() => { return; }) as React.Dispatch<any>
});

export const ArenaContextProvider = ArenaContext.Provider;

export const useArenaContext = () => {
  const { state, dispatch } = useContext(ArenaContext);

  return { ...state, dispatch };
};

export const useContextReducer = () => {
  const [state, dispatch] = useReducer(arenaContextReducer, getInitialValue());

  return { state, dispatch };
};