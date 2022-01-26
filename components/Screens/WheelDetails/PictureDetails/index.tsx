import { Box, CardMedia, Dialog } from '@mui/material';
import React from 'react';

interface Props {
  alt: string
  handleClose: () => void
  picture?: string
}

const PictureDetails: React.FC<Props> = ({ alt, handleClose, picture }) => (
  <Dialog
    id="dialog"
    onClose={ handleClose }
    open={ !!picture }
    maxWidth="xl"
  >
    <Box id="box" sx={ { display: 'flex' } }>
      <CardMedia
        component="img"
        image={ picture }
        alt={ alt }
        style={ {
          height: 'auto',
          maxHeight: 'calc(100vh - 64px)',
          maxWidth: 'calc(100vw - 64px)',
          width: 'auto'
        } }
      />
    </Box>
  </Dialog>
);

export default PictureDetails;
