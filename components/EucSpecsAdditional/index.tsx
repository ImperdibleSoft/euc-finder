import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { wheelFeatureFormatters, wheelFeatureIcons } from '../../constants';
import { Wheel, WheelFeatureFormatters, WheelFeatureIcons } from '../../types';
import RegularList from '../Lists/RegularList';
import { ListItem } from '../Lists/types';

interface Props {
  specs: Array<keyof Wheel>
  wheel: Wheel
}

const EucSpecsAdditional: React.FC<Props> = ({ specs, wheel }) => {
  const { t } = useTranslation();

  const listItems: ListItem[] = specs.map(key => {
    const icon = wheelFeatureIcons[key as keyof WheelFeatureIcons];
    const label = t(key);
    const formatter = wheelFeatureFormatters[key as keyof WheelFeatureFormatters];
    const value = formatter(wheel[key]);

    return {
      icon,
      iconProps: { active: !!wheel[key] },
      primary: label,
      secondary: value
    };
  });

  return (
    <Grid item xs={ 12 } md={ 6 }>
      <Typography sx={ { mt: 4, mb: 2 } } variant="h6" component="div">
        { t('additionalSpecs-title') }
      </Typography>

      <Card>
        <RegularList dense items={ listItems } />
      </Card>
    </Grid>
  );};

export default EucSpecsAdditional;