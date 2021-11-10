import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextToCopy from '../../components/TextToCopy';
import { APP_NAME } from '../../constants';

interface Props {
  callback: () => void;
  copyCallback?: () => void;
  code?: string;
  discount?: number;
  storeName: string;
}

/**
 * Displays a modal before navigating to an external URL to
 * explain the user that once he/she is out of EUC Finder, none
 * of their interactions will be EUC Finder's responsibility
 * 
 * Also, displays a discount code, in case it needs to be manually
 * applied
 */
export const useConfirmationModal = ({ callback, code, copyCallback, discount, storeName }: Props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDismiss = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    handleDismiss();
    callback();
  };

  const render = () => {
    if (!open) {
      return null;
    }

    return (
      <Dialog open={ open } onClose={ handleDismiss }>
        <DialogTitle>{ t('confirmation-title', { appName: APP_NAME }) }</DialogTitle>

        <DialogContent>
          <DialogContentText sx={ { mb: 2 } }>
            { t('confirmation-msg', { appName: APP_NAME, storeName }) }
          </DialogContentText>

          { !!(code && discount) && (
            <>
              <DialogContentText sx={ { mb: 2 } }>
                { t('manualDiscount-msg', { discount }) }
              </DialogContentText>

              <TextToCopy callback={ copyCallback } text={ code } />
            </>
          ) }
        </DialogContent>

        <DialogActions>
          <Button onClick={ handleDismiss }>{ t('confirmationStay-label') }</Button>
          <Button onClick={ handleConfirm } variant="contained">{ t('confirmationVisit-label') }</Button>
        </DialogActions>
      </Dialog>
    );
  };

  return {
    handleOpen,
    render
  };
};