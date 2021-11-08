import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { BrandId } from '../../types';

interface Props {
  alt: string;
  brandId: BrandId;
}

const BrandLogo: React.FC<Props> = ({ alt, brandId }) => (
  <Box
    style={ { backgroundColor: '#fefefe66' } }
    sx={ {
      borderTopLeftRadius: 4,
      height: 96,
      position: 'absolute',
      right: 0,
      top: 240 - 96,
      width: 96
    } }
  >
    <Image
      alt={ alt }
      height="96px"
      src={ `/logos/manufacturers/${ brandId }.png` }
      width="96px"
    />
  </Box>
);

export default BrandLogo;