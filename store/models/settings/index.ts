import { AvailableTheme, LOCAL_STORAGE_KEY, Region } from '../../../types';
import { getItem } from '../../../utils';
import { getUserCustomSpecWeights } from '../../../utils/settings';
import { SettingsState, SpecWeightsPreset } from '../../types';
import { getInitialMeasureUnits } from './measureUnits';
import { getGenericSpecWheights } from './specWeights';

export * from './measureUnits';

export const getSettingsInitialState = (): SettingsState => ({
  disclaimer: getItem(LOCAL_STORAGE_KEY.INITIAL_DISCLAIMER) === 'true',
  measureUnits: getInitialMeasureUnits(),
  region: (getItem(LOCAL_STORAGE_KEY.REGION) || 'eu') as Region,
  specWeights: {
    preset: (getItem(LOCAL_STORAGE_KEY.SPECWEIGHT_PRESET) as SpecWeightsPreset) || undefined,
    customValues: {
      ...getGenericSpecWheights(),
      ...getUserCustomSpecWeights()
    }
  },
  theme: AvailableTheme.light
});
