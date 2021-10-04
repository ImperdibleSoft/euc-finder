import { Box, Button } from '@mui/material';
import React from 'react';
import { PurchaseLink } from '../../types';

interface Props {
  items: PurchaseLink[]
  large?: boolean
}

const EucDetailPurchaseLinks: React.FC<Props> = ({ items, large }) => (
  <Box>
    { items.map(({ label, url }) => (
      <Button
        key={ url }
        href={ url }
        size={ large ? 'large' : 'medium' }
        sx={ { mr: 2, mt: 2 } }
        target="_blank"
        variant="contained"
      >
        { `${ large ? 'Comprar en ' : '' }${ label }` }
      </Button>
    )) }
  </Box>
);

export default EucDetailPurchaseLinks;