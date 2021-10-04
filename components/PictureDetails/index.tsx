import { Box, CardMedia, Dialog } from '@mui/material';
import React from 'react';

interface Props {
  alt: string
  handleClose: () => void
  picture?: string
}

const PictureDetails: React.FC<Props> = ({ alt, handleClose, picture }) => {
  return (
    <Dialog
      onClose={ handleClose }
      open={ !!picture }
    >
      <Box sx={ { display: 'flex' } }>
        <CardMedia
          component="img"
          image={ picture }
          alt={ alt }
        />
      </Box>
    </Dialog>
  );
};

export default PictureDetails;