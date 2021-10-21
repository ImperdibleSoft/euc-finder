import { Box, Button } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PurchaseLink } from '../../types';

interface Props {
  items: PurchaseLink[]
  large?: boolean
}

const EucDetailPurchaseLinks: React.FC<Props> = ({ items, large }) => {
  const { t } = useTranslation();
  
  return (
    <Box>
      { items.map(({ color, label, url }) => (
        <Button
          key={ url }
          href={ url }
          size={ large ? 'large' : 'medium' }
          sx={ { mr: 2, mt: 2, backgroundColor: color } }
          target="_blank"
          variant="contained"
        >
          { `${ large ? `${ t('buyAt-label') } ` : '' }${ label }` }
        </Button>
      )) }
    </Box>
  );};

export default EucDetailPurchaseLinks;