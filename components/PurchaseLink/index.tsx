import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Store } from '../../types';
import { isDarkTheme } from '../../utils';

interface Props {
  discount?: number;
  large?: boolean;
  url: string;
  store: Store;
}

const PurchaseLink: React.FC<Props> = ({ discount, large = false, url, store }) => {
  const { t } = useTranslation();
  const dark = isDarkTheme();

  const [btnLabel] = t('buyAt-label').split(' ');

  const logoSize = large ? 200 : 156;
  const [logoPath, extension] = store.logo.split('.');
  const logoVersion = dark ? 'dark' : 'light';
  const logo = `${ logoPath }-${ logoVersion }.${ extension }`; 

  return (
    <Card
      sx={ {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        p: 1
      } }
    >
      <Box sx={ {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: logoSize,
        maxWidth: logoSize
      } }>
        <CardMedia
          alt={ `${ store.name } logo` }
          component="img"
          image={ logo }
          sx={ { objectFit: 'initial' } }
        />
      </Box>

      { !!discount && (
        <Typography variant="body1" component="p" sx={ { mb: 1 } }>
          { t('discount', { discount }) }
        </Typography>
      ) }

      <Button
        href={ url }
        size={ large ? 'large' : 'medium' }
        target="_blank"
        variant="contained"
      >
        { btnLabel }
      </Button>
    </Card>
  );
};

export default PurchaseLink;