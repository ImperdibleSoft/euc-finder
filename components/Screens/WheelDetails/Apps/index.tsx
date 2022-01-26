import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useContainerMargins, useWheelsDetailsTranslations } from '../../../../hooks';
import { getBrands, getWheelApps } from '../../../../store/selectors';
import { AvailablePlatforms, Wheel } from '../../../../types';
import { formatWheelName, isAndroid, isIOS } from '../../../../utils';
import Dropdown from '../../../Form/Dropdown';
import AppCard from './AppCard';

const getDefaultPlatform = (): AvailablePlatforms => {
  if (isIOS()) {
    return 'iOS';
  }

  if (isAndroid()) {
    return 'android';
  }

  return '';
};

interface Props {
  wheel: Wheel;
}

const Apps: React.FC<Props> = ({ wheel }) => {
  const { t } = useWheelsDetailsTranslations();
  const brands = useSelector(getBrands);
  const wheelName = formatWheelName(wheel, brands);
  const compatibleApps = useSelector(getWheelApps(wheel.brandId));
  const { container, firstItem } = useContainerMargins();
  const [platform, setPlatform] = useState<AvailablePlatforms>('');

  const { official, unofficial } = useMemo(() =>
    ({
      // eslint-disable-next-line no-restricted-syntax
      official: compatibleApps.official.filter(app => !platform || platform in app.platforms),
      // eslint-disable-next-line no-restricted-syntax
      unofficial: compatibleApps.unofficial.filter(app => !platform || platform in app.platforms)
    }),
  [compatibleApps, platform]
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setPlatform(value as AvailablePlatforms);
  };

  useEffect(() => {
    const plat = getDefaultPlatform();
    if (plat !== platform) {
      setPlatform(plat);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!official.length && !unofficial.length) {
    return null;
  }

  return (
    <Container disableGutters={ !container }>
      <Box sx={ { justifyContent: 'flex-end', display: 'flex', mt: firstItem ? 6 : 0 } }>
        <Dropdown
          label={ t('filterByPlatform-label') }
          name="platform"
          onChange={ handleChange }
          options={ [
            {
              label: t('allPlatforms-label'),
              value: ''
            },
            {
              label: t('android-label'),
              value: 'android'
            },
            {
              label: t('ios-label'),
              value: 'iOS'
            }
          ] }
          value={ platform }
          fullWidth={ false }
        />
      </Box>

      { !!official.length && (
        <>
          <Typography variant="h6" component="div" sx={ { mb: 2, mt: 2 } }>
            { t(`officialWheelApps-title`, { wheelName }) }
          </Typography>

          <Grid container spacing={ 2 }>
            { official.map(app => (
              <AppCard key={ app.id } app={ app } platform={ platform } official />
            )) }
          </Grid>
        </>
      ) }

      {
        !!unofficial.length && (
          <>
            <Typography variant="h6" component="div" sx={ { mb: 2, mt: 2 } }>
              { t('unofficialApps-title') }
            </Typography>
    
            <Grid container spacing={ 2 }>
              { unofficial.map(app => (
                <AppCard key={ app.id } platform={ platform } app={ app } />
              )) }
            </Grid>
          </>
        )
      }
    </Container>
  );
};

export default Apps;
