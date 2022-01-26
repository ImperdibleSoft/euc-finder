import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { wheelFeatureFormatters, wheelFeatureIcons } from '../../../../constants';
import { useWheelsDetailsTranslations } from '../../../../hooks';
import { getMeasureUnits } from '../../../../store/selectors';
import { Wheel, WheelFeatureFormatters, WheelFeatureIcons } from '../../../../types';
import HighlightedList from '../../../Lists/HighlightedList';
import { ListItem } from '../../../Lists/types';

interface Props {
  specs: Array<keyof Wheel>
  wheel: Wheel
}

const HighlightedSpecs: React.FC<Props> = ({ specs, wheel }) => {
  const { t } = useWheelsDetailsTranslations();
  const measureUnits = useSelector(getMeasureUnits);
  
  const listItems: ListItem[] = specs.map(key => {
    const icon = wheelFeatureIcons[key as keyof WheelFeatureIcons];
    const label = t(key);
    const formatter = wheelFeatureFormatters[key as keyof WheelFeatureFormatters];
    // @ts-ignore
    // eslint-disable-next-line no-restricted-syntax
    const convertTo = key in measureUnits ? measureUnits[key] : undefined;
    const value = formatter(wheel[key], t, convertTo, key === 'width' ? 2 : 0);

    return {
      icon,
      iconProps: { active: !!wheel[key] && value && value !== '-' },
      primary: value,
      secondary: label
    };
  });

  return (
    <>
      <Typography sx={ { mt: 4, mb: 2 } } variant="h6" component="div">
        { t('highlightedSpecs-title') }
      </Typography>

      <HighlightedList items={ listItems } />
    </>
  );};

export default HighlightedSpecs;
