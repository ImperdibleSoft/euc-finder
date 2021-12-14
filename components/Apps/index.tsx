import { Box, Container, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useContainerMargins } from '../../hooks';
import { getWheelApps, getWheelById } from '../../store/selectors';
import { AvailablePlatforms, WheelId } from '../../types';
import { isAndroid, isIOS } from '../../utils';
import Dropdown from '../Form/Dropdown';
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

const Apps: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const id = router.query.id as WheelId;
  const wheel = useSelector(getWheelById(id));
  const compatibleApps = useSelector(getWheelApps(wheel?.brandId));
  const addSpacing = useContainerMargins();
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

  return (
    <Container disableGutters={ !addSpacing }>      
      <Box
        sx={ {
          alignItems: 'flex-end',
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          justifyContent: 'center',
          mt: 4,
          mb: 2
        } }
      >
        <Typography
          sx={ {
            alignSelf: { xs: 'flex-start', sm: 'center' },
            display: 'inline-flex',
            flex: 1,
            mt: { xs: 1, sm: 0 }
          } }
          variant="h6"
          component="div"
        >
          { t('officialApps-title') }
        </Typography>

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
              label: t('android'),
              value: 'android'
            },
            {
              label: t('ios'),
              value: 'iOS'
            }
          ] }
          value={ platform }
          fullWidth={ false }
        />
      </Box>

      <Grid container spacing={ 2 }>
        { official.map(app => (
          <AppCard key={ app.id } app={ app } platform={ platform } official />
        )) }
      </Grid>

      <Typography sx={ { mt: 4, mb: 2 } } variant="h6" component="div">
        { t('unofficialApps-title') }
      </Typography>

      <Grid container spacing={ 2 } sx={ { mt: 0 } }>
        { unofficial.map(app => (
          <AppCard key={ app.id } platform={ platform } app={ app } />
        )) }
      </Grid>
    </Container>
  );
};

export default Apps;