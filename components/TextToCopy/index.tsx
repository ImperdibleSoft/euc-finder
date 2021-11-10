import { Alert, Box, Button, FormControl, Icon, Input, Snackbar  } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

type CopyState = 'idle' | 'success' | 'error'

interface Props {
  callback?: () => void;
  text: string;
}

const TextToCopy: React.FC<Props> = ({ callback, text }) => {
  const { t } = useTranslation();
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
        m: 1,
        width: '250px'
      } } variant="outlined">
        <Input readOnly sx={ { pl: 2 } } type="text" value={ text } />

        { canCopy && (
          <Button
            sx={ { borderTopLeftRadius: 0, borderBottomLeftRadius: 0, py: 1 } }
            onClick={ handleCopy }
            variant="outlined"
          >
            <Icon>content_copy</Icon>
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