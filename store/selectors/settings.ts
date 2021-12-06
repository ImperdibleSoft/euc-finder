import { RootState } from '../types';

export const getDisclaimer = ({ settings }: RootState) =>
  settings.disclaimer;

export const getRegion = ({ settings }: RootState) =>
  settings.region;

export const getMeasureUnits = ({ settings }: RootState) =>
  settings.measureUnits;