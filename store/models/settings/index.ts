import { LOCAL_STORAGE_KEY, Region } from '../../../types';
import { getItem } from '../../../utils';
import { SettingsState, SpecWeightsPreset } from '../../types';
import { getInitialMeasureUnits } from './measureUnits';
import { getGenericSpecWheights } from './specWeights';

export const getSettingsInitialState = (): SettingsState => ({
  disclaimer: getItem(LOCAL_STORAGE_KEY.INITIAL_DISCLAIMER) === 'true',
  measureUnits: getInitialMeasureUnits(),
  region: (getItem(LOCAL_STORAGE_KEY.REGION) || 'eu') as Region,
  specWeights: {
    preset: SpecWeightsPreset.generic,
    customValues: getGenericSpecWheights()
  }
});
