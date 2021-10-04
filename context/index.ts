import React, { useContext } from 'react';
import { initialValue } from './models';

const ArenaContext = React.createContext(initialValue);

export const ArenaContextProvider = ArenaContext.Provider;

export const useArenaContext = () => {
  const state = useContext(ArenaContext);

  return state;
};