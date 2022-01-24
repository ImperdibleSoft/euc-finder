import { getGenericSpecWheights } from '../store/models/settings/specWeights';
import { SpecWeights } from '../store/types';
import { LOCAL_STORAGE_KEY } from '../types';
import { getItem } from './localStorage';

export const getUserCustomSpecWeights = () => {
  let customValues: SpecWeights;

  try {
    const hardcodedValues = getItem(LOCAL_STORAGE_KEY.SPECWEIGHT_CUSTOMVALUES);
    customValues = JSON.parse(hardcodedValues);
  } catch {
    customValues = getGenericSpecWheights();
  }

  return customValues;
};
