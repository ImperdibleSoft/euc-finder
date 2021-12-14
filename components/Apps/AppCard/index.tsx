import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCardSizes } from '../../../hooks';
import { App } from '../../../types';

const getLink = (app: App, platform: Props['platform']) => {
  // eslint-disable-next-line no-restricted-syntax
  if (platform === 'Android' && 'android' in app.platforms) {
    return app.platforms.android;
  }

  // eslint-disable-next-line no-restricted-syntax
  if (platform === 'iOS' && 'iOS' in app.platforms) {
    return app.platforms.iOS;
  }

  return {
    logo: '',
    url: ''
  };
};

interface Props {
  app: App;
  official?: boolean;
  platform: 'Android' | 'iOS';
}

const AppCard: React.FC<Props> = ({ app, platform }) => {
  const { t } = useTranslation();
  const breakpoints = useCardSizes();
  const { logo, url } = getLink(app, platform);

  if (!url) {
    return null;
  }

  return (
    <Grid item { ...breakpoints }>
      <Card sx={ { display: 'flex' } }>
        <Box sx={ { display: 'flex', flexDirection: 'column', flex: 1 } }>
          <CardContent sx={ { flex: '1 0 auto' } }>
            <Typography component="div" variant="h5">
              { app.name }
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" component="div">
              { platform }
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              LinkComponent="a"
              href={ url }
              target="_blank"
            >
              { t('download-label') }
            </Button>
          </CardActions>
        </Box>

        <CardMedia
          alt={ t('appPicture-label', { appName: app.name }) }
          component="img"
          image={ logo }
          sx={ { height: 80, width: 80 } }
        />
      </Card>
    </Grid>
  );
};

export default AppCard;