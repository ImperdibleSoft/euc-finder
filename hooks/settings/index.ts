import { useCommonTranslations, useSettingsTranslations } from '../translations';
import { useInterface } from './interface';
import { useMeasureUnits } from './measureUnits';
import { usePresets } from './presets';

export const useSettings = () => {
  const common = useCommonTranslations();
  const { t, i18n } = useSettingsTranslations();
  const { interfaceFields } = useInterface(t, i18n, common.t);
  const { measureUnitFields } = useMeasureUnits(t, common.t);
  const { activePreset, handleChangePreset, specWeightsFields } = usePresets(common.t);

  return {
    interfaceFields,
    measureUnitFields,
    activePreset,
    handleChangePreset,
    specWeightsFields
  };
};
