import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { WheelsTableColumns } from '../../types';
import Checkbox from '../Form/Checkbox';

interface Props {
  columns: WheelsTableColumns,
  handleHide: (key: keyof WheelsTableColumns) => void
  handleReset: () => void
  handleShow: (key: keyof WheelsTableColumns) => void
}

const Columns: React.FC<Props> = ({ columns, handleHide, handleReset, handleShow }) => {
  const { t } = useTranslation();

  const renderColumnCheckbox = (key: string) => {
    const label = t(key);
    const value = columns[key as keyof WheelsTableColumns];

    const action = value ? handleHide : handleShow;

    return (
      <Checkbox
        key={ key }
        checked={ value }
        label={ label }
        name={ key }
        onChange={ () => action(key as keyof WheelsTableColumns) }
      />
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={ { p: 2, pt: 0 } }>
      <Typography variant="h6" component="div" sx={ { mb: 2, mt: { sm: 2 } } }>
        { t('columns-title') }
      </Typography>

      <form noValidate onSubmit={ handleSubmit }>
        { Object.keys(columns).map(renderColumnCheckbox) }

        <Button
          onClick={ handleReset }
          type="button"
          sx={ { justifySelf: 'flex-end' } }
        >
          { t('reset-label') }
        </Button>
      </form>
    </Box>
  );
};

export default Columns;