import { useTranslation } from 'react-i18next';
import { useInterface } from './interface';
import { useMeasureUnits } from './measureUnits';
import { usePresets } from './presets';

export const useSettings = () => {
  const { t, i18n } = useTranslation('settings');
  const { interfaceFields } = useInterface(t, i18n);
  const { measureUnitFields } = useMeasureUnits(t);
  const { activePreset, handleChangePreset, specWeightsFields } = usePresets(t);

  return {
    interfaceFields,
    measureUnitFields,
    activePreset,
    handleChangePreset,
    specWeightsFields
  };
};
