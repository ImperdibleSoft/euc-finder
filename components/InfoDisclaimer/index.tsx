import { Box, Button, Dialog, DialogTitle, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { wheelFeatureFormatters } from '../../constants';
import { useArenaContext } from '../../context';

interface Props {
  handleClose: () => void
  open: boolean,
}

/* eslint-disable max-len */
const InfoDisclaimer: React.FC<Props> = ({ handleClose, open }) => {
  const { measureUnits: { maxSpeed } } = useArenaContext();
  const { t } = useTranslation();
  const speed = wheelFeatureFormatters.maxSpeed(25, t, maxSpeed);

  return (
    <Dialog onClose={ handleClose } open={ open }>
      <DialogTitle>{ t('importantInfo-title') }</DialogTitle>

      <Box sx={ { px: 3 } }>
        <Typography variant="h6" component="p" sx={ { mb: 2 } }>
          { t('models-title') }
        </Typography>
        <Typography variant="body1" component="p" sx={ { mb: 2 } }>
          { t('newModels-msg') }
        </Typography>
        <Typography variant="body1" component="p" sx={ { mb: 2 } }>
          { t('olderVersions-msg') }
        </Typography>
      </Box>

      <Box sx={ { px: 3 } }>
        <Typography variant="h6" component="p" sx={ { mb: 2 } }>
          { t('speed-title') }
        </Typography>
        <Typography variant="body1" component="p" sx={ { mb: 2 } }>
          { t('displayedSpeed-msg', { speed }) }
        </Typography>
        <Typography variant="body1" component="p" sx={ { mb: 2 } }>
          { t('modifySpeed-msg') }
        </Typography>
      </Box>

      <Box sx={ { px: 3 } }>
        <Typography variant="h6" component="p" sx={ { mb: 2 } }>
          { t('range-title') }
        </Typography>
        <Typography variant="body1" component="p" sx={ { mb: 2 } }>
          { t('displayedRange-msg') }
        </Typography>
        <Typography variant="body1" component="p" sx={ { mb: 2 } }>
          { t('usageExamples-msg') }
        </Typography>
      </Box>

      <Box sx={ { px: 3, pb: 3, alignItems: 'flex-end', display: 'flex', justifyContent: 'flex-end' } }>
        <Button onClick={ handleClose } variant="contained">
          { t('ok-label') }
        </Button>
      </Box>
    </Dialog>
  );};

export default InfoDisclaimer;