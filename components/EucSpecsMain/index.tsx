import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { wheelFeatureFormatters, wheelFeatureIcons } from '../../constants';
import { useArenaContext } from '../../context';
import { Wheel, WheelFeatureFormatters, WheelFeatureIcons } from '../../types';
import RegularList from '../Lists/RegularList';
import { ListItem } from '../Lists/types';

interface Props {
  specs: Array<keyof Wheel>
  wheel: Wheel
}

const EucSpecsMain: React.FC<Props> = ({ specs, wheel }) => {
  const { t } = useTranslation();
  const { measureUnits } = useArenaContext();

  const listItems: ListItem[] = specs.map(key => {
    const icon = wheelFeatureIcons[key as keyof WheelFeatureIcons];
    const label = t(key);
    const formatter = wheelFeatureFormatters[key as keyof WheelFeatureFormatters];
    // @ts-ignore
    // eslint-disable-next-line no-restricted-syntax
    const convertTo = key in measureUnits ? measureUnits[key] : undefined;
    const value = formatter(wheel[key], t, convertTo);

    return {
      icon,
      iconProps: { active: !!wheel[key] },
      primary: value,
      secondary: label
    };
  });

  return (
    <Grid item xs={ 12 } md={ 6 }>
      <Typography sx={ { mt: 4, mb: 2 } } variant="h6" component="div">
        { t('mainSpecs-title') }
      </Typography>

      <Card>
        <RegularList items={ listItems } />
      </Card>
    </Grid>
  );};

export default EucSpecsMain;