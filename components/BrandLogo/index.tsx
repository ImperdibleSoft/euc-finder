import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const size = 64;

interface Props {
  alt: string;
  logo: string;
}

const BrandLogo: React.FC<Props> = ({ alt, logo }) => (
  <Box
    style={ { backgroundColor: '#dcdcdc88' } }
    sx={ {
      borderTopLeftRadius: 4,
      height: size,
      position: 'absolute',
      right: 0,
      top: 240 - size,
      width: size
    } }
  >
    <Image
      alt={ alt }
      height={ `${ size }px` }
      src={ logo }
      width={ `${ size }px` }
    />
  </Box>
);

export default BrandLogo;