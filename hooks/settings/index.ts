import { useInterface } from './interface';
import { useMeasureUnits } from './measureUnits';
import { usePresets } from './presets';

export const useSettings = () => {
  const { interfaceFields } = useInterface();
  const { measureUnitFields } = useMeasureUnits();
  const { activePreset, handleChangePreset, specWeightsFields } = usePresets();

  return {
    interfaceFields,
    measureUnitFields,
    activePreset,
    handleChangePreset,
    specWeightsFields
  };
};
