import { Box, Button, Card, CardMedia, Icon, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useConfirmationModal } from '../../hooks';
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
  
  const navigate = () => {
    window?.open(url);
  };

  const discountProps = !!store.meta.manualDiscount
    ? {
      code: store.meta.code,
      discount: store.meta.discount
    }
    : {};

  const { handleOpen, render } = useConfirmationModal({
    callback: navigate,
    externalName: store.name,
    ...discountProps
  });

  const [btnLabel] = t('buyAt-label').split(' ');

  const logoSize = large ? 200 : 156;
  const [logoPath, extension] = store.logo.split('.');
  const logoVersion = dark ? 'dark' : 'light';
  const logo = `${ logoPath }-${ logoVersion }.${ extension }`; 

  return (
    <>
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
          <Typography variant="body1" component="span" sx={ { alignItems: 'center', display: 'flex', mb: 2 } }>
            <Icon sx={ { mr: 1 } } color="secondary">local_offer</Icon> { t('discount', { discount }) }
          </Typography>
        ) }

        <Button
          onClick={ handleOpen }
          size={ large ? 'large' : 'medium' }
          variant="contained"
        >
          { btnLabel }
        </Button>
      </Card>

      { render() }
    </>
  );
};

export default PurchaseLink;