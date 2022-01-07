import React, { useContext } from 'react';
import { ModalsContextType } from './types';

const ModalsContext = React.createContext<ModalsContextType>({ initialDisclaimer: {} });

export const ModalsContextProvider = ModalsContext.Provider;

export const useModalsContext = () => useContext(ModalsContext);
