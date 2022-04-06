import { useSettingsTranslations } from '../translations';
import { useInterface } from './interface';
import { useMeasureUnits } from './measureUnits';
import { usePresets } from './presets';
import { useSystem } from './system';

export const useSettings = () => {
  const { t, i18n } = useSettingsTranslations();
  const { systemFields } = useSystem(t);
  const { interfaceFields } = useInterface(t, i18n);
  const { measureUnitFields } = useMeasureUnits(t);
  const { activePreset, handleChangePreset, specWeightsFields } = usePresets(t);

  return {
    systemFields,
    interfaceFields,
    measureUnitFields,
    activePreset,
    handleChangePreset,
    specWeightsFields
  };
};
