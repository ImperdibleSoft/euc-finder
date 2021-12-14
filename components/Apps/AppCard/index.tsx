import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCardSizes } from '../../../hooks';
import { App, AvailablePlatforms } from '../../../types';

const getCards = (app: App, platform: AvailablePlatforms) => {
  const platforms = [];

  // eslint-disable-next-line no-restricted-syntax
  if ('android' in app.platforms && platform !== 'iOS') {
    platforms.push({ ...app.platforms.android, platform: 'Android' });
  }

  // eslint-disable-next-line no-restricted-syntax
  if ('iOS' in app.platforms && platform !== 'android') {
    platforms.push({ ...app.platforms.iOS, platform: 'iOS' });
  }
  
  return platforms;
};

interface Props {
  app: App;
  platform: AvailablePlatforms;
  official?: boolean;
}

const AppCard: React.FC<Props> = ({ app, platform }) => {
  const { t } = useTranslation();
  const breakpoints = useCardSizes();
  const cards = getCards(app, platform);

  if (!cards.length) {
    return null;
  }

  return (
    <>
      { cards.map(card => (
        <Grid key={ card.url } item { ...breakpoints }>
          <Card sx={ { display: 'flex' } }>
            <Box sx={ { display: 'flex', flexDirection: 'column', flex: 1 } }>
              <CardContent sx={ { flex: '1 0 auto' } }>
                <Typography component="div" variant="h5">
                  { app.name }
                </Typography>

                <Typography variant="subtitle1" color="text.secondary" component="div">
                  { card.platform }
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  LinkComponent="a"
                  href={ card.url }
                  target="_blank"
                >
                  { t('downloadApp-label') }
                </Button>
              </CardActions>
            </Box>

            <CardMedia
              alt={ t('appPicture-label', { appName: app.name }) }
              component="img"
              image={ card.logo }
              sx={ { height: 80, width: 80 } }
            />
          </Card>
        </Grid>
      )) }
    </>
  );
};

export default AppCard;