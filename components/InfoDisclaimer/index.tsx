import { Box, Button, Dialog, DialogTitle, Typography } from '@mui/material';
import React from 'react';

interface Props {
  handleClose: () => void
  open: boolean,
}

/* eslint-disable max-len */
const InfoDisclaimer: React.FC<Props> = ({ handleClose, open }) => (
  <Dialog onClose={ handleClose } open={ open }>
    <DialogTitle>Información importante</DialogTitle>

    <Box sx={ { px: 3 } }>
      <Typography variant="h6" component="p" sx={ { mb: 2 } }>
        Modelos
      </Typography>
      <Typography variant="body1" component="p" sx={ { mb: 2 } }>
        Esta web sólo muestra las versiones más nuevas y potentes de cada modelo proporcionado por el fabricante.
      </Typography>
      <Typography variant="body1" component="p" sx={ { mb: 2 } }>
        Es decir, versiones anteriores y/o con menos prestaciones (aunque sean actuales) no se mostrarán en esta web.
      </Typography>
    </Box>

    <Box sx={ { px: 3 } }>
      <Typography variant="h6" component="p" sx={ { mb: 2 } }>
        Autonomía
      </Typography>
      <Typography variant="body1" component="p" sx={ { mb: 2 } }>
        La autonomía mostrada en esta página está basada en un uso más realista de los monociclos.
      </Typography>
      <Typography variant="body1" component="p" sx={ { mb: 2 } }>
        Esto incluye acelerones, frenadas intensas, subir pendientes, saltar o mantener altas velocidades de forma prolongada.
      </Typography>
    </Box>

    <Box sx={ { px: 3, pb: 3, alignItems: 'flex-end', display: 'flex', justifyContent: 'flex-end' } }>
      <Button onClick={ handleClose } variant="contained">
        OK
      </Button>
    </Box>
  </Dialog>
);

export default InfoDisclaimer;