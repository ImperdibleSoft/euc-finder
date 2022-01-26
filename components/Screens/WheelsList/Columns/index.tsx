import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useWheelsListTranslations } from '../../../../hooks';
import { WheelsTableColumns } from '../../../../types';
import Collapsable from '../../../Collapsable';
import Checkbox from '../../../Form/Checkbox';

interface Props {
  collapsedSize?: string;
  columns: WheelsTableColumns,
  handleHide: (key: keyof WheelsTableColumns) => void
  handleReset: () => void
  handleShow: (key: keyof WheelsTableColumns) => void
}

const Columns: React.FC<Props> = ({
  collapsedSize,
  columns,
  handleHide,
  handleReset,
  handleShow
}) => {
  const { t } = useWheelsListTranslations();

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
      <Collapsable collapsedSize={ collapsedSize }>
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
            { t('resetColumns-btn') }
          </Button>
        </form>
      </Collapsable>
    </Box>
  );
};

export default Columns;
