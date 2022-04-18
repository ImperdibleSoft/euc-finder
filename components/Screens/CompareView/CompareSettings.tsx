import { Box, Button, ButtonGroup, Divider, Typography } from '@mui/material';
import React from 'react';
import { useSettingsTranslations } from '../../../hooks';
import { SpecWeightsPreset } from '../../../store/types';
import Slider, { Props as SliderProps } from '../../Form/Slider';

interface Props {
  activePreset: SpecWeightsPreset;
  handleChangePreset: (preset: SpecWeightsPreset) => void;
  fields: SliderProps[];
}

const CompareSettings = ({ activePreset, handleChangePreset, fields }: Props): JSX.Element => {
  const { t } = useSettingsTranslations();
  
  return (
    <Box sx={ { px: 2 } }>
      <Typography variant="h6" component="div" sx={ { mb: 2, mt: { sm: 2 } } }>
        { t('settings-title') }
      </Typography>

      <Box
        sx={ {
          my: 2
          // width: '100%'
        } }
      >
        <ButtonGroup orientation="vertical" variant="outlined" disableElevation sx={ { width: '100%' } }>
          { Object.values(SpecWeightsPreset).map(preset => (
            <Button
              key={ `${ preset }-preset` }
              variant={ activePreset === preset ? 'contained' : undefined }
              onClick={ () => handleChangePreset(preset) }
            >
              { t(`${ preset }Preset-label`) }
            </Button>
          )) }
        </ButtonGroup>
      </Box>
      <Divider />
      
      { fields.map(field => (
        <Slider
          key={ field.name }
          { ...field }
          style={ {
            marginBottom: 24,
            ...field.style
          } }
        />
      )) }
    </Box>
  );
};

export default CompareSettings;
