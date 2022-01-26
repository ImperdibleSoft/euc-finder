import { Alert, Box, Button, FormControl, Icon, Input, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { useCommonTranslations } from '../../hooks';

type CopyState = 'idle' | 'success' | 'error'

interface Props {
  callback?: () => void;
  text: string;
}

const TextToCopy: React.FC<Props> = ({ callback, text }) => {
  const { t } = useCommonTranslations();
  const canCopy = !!navigator?.clipboard?.writeText;
  const [copied, setCopied] = useState<CopyState>('idle');

  const handleCopy = () => {
    if (canCopy) {
      try {
        navigator.clipboard.writeText(text);
        setCopied('success');
        callback?.();
      } catch {
        setCopied('error');
      }
    }
  };

  return (
    <Box sx={ { display: 'flex', justifyContent: 'center', width: '100%' } }>
      <FormControl sx={ {
        flexDirection: 'row',
        my: 1,
        mx: { xs: 0, sm: 1 },
        width: { xs: '100%', sm: 300 }
      } } variant="outlined">
        <Input readOnly sx={ { pl: { xs: 0, sm: 2 } } } type="text" value={ text } />

        { canCopy && (
          <Button
            sx={ {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              py: 1,
              width: 120
            } }
            onClick={ handleCopy }
            variant="outlined"
          >
            <Icon sx={ { mr: 1 } }>content_copy</Icon>
            { t('copy-btn') }
          </Button>
        ) }
      </FormControl>

      <Snackbar
        anchorOrigin={ { horizontal: 'center', vertical: 'bottom' } }
        open={ copied === 'success' }
        autoHideDuration={ 6000 }
      >
        <Alert severity="success" sx={ { width: '100%' } }>
          { t('copied-msg') }
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={ { horizontal: 'center', vertical: 'bottom' } }
        open={ copied === 'error' }
        autoHideDuration={ 6000 }
      >
        <Alert severity="error" sx={ { width: '100%' } }>
          { t('copyError-msg') }
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default TextToCopy;
