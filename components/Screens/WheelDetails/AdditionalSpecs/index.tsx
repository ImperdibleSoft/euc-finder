import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { wheelFeatureFormatters, wheelFeatureIcons } from '../../../../constants';
import { commonNs, useWheelsDetailsTranslations } from '../../../../hooks';
import { getMaxCurrentAllowed, getMeasureUnits } from '../../../../store/selectors';
import { Wheel, WheelFeatureFormatters, WheelFeatureIcons } from '../../../../types';
import { getFormatterValue } from '../../../../utils';
import RegularList from '../../../Lists/RegularList';
import { ListItem } from '../../../Lists/types';

interface Props {
  specs: Array<keyof Wheel>
  wheel: Wheel
}

const AdditionalSpecs: React.FC<Props> = ({ specs, wheel }) => {
  const { t } = useWheelsDetailsTranslations();
  const measureUnits = useSelector(getMeasureUnits);
  const maxCurrentAllowed = useSelector(getMaxCurrentAllowed);

  const listItems: ListItem[] = specs.map(key => {
    const icon = wheelFeatureIcons[key as keyof WheelFeatureIcons];
    const label = t(key, commonNs);
    const formatter = wheelFeatureFormatters[key as keyof WheelFeatureFormatters];
    // @ts-ignore
    // eslint-disable-next-line no-restricted-syntax
    const convertTo = key in measureUnits ? measureUnits[key] : undefined;
    const valueToFormat = getFormatterValue(wheel, key, { maxCurrentAllowed });
    const value = formatter(valueToFormat, t, convertTo, key === 'width' ? 2 : 0);

    return {
      icon,
      iconProps: { active: !!valueToFormat && value && value !== '-' },
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

export default AdditionalSpecs;
