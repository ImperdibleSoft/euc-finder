import { useInterface } from './interface';
import { useMeasureUnits } from './measureUnits';
import { usePresets } from './presets';

export const useSettings = () => {
  const { languageField } = useInterface();
  const { measureUnitFields } = useMeasureUnits();
  const { activePreset, handleChangePreset, specWeightsFields } = usePresets();

  return {
    languageField,
    measureUnitFields,
    activePreset,
    handleChangePreset,
    specWeightsFields
  };
};