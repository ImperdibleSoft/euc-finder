import { Box, Container, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useContainerMargins } from '../../hooks';
import { getWheelApps, getWheelById } from '../../store/selectors';
import { AvailablePlatforms, WheelId } from '../../types';
import Dropdown from '../Form/Dropdown';
import AppCard from './AppCard';

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

  return (
    <Container disableGutters={ !addSpacing }>      
      <Box
        sx={ {
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          mt: 4,
          mb: 2
        } }
      >
        <Typography sx={ { display: 'inline-flex', flex: 1 } } variant="h6" component="div">
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