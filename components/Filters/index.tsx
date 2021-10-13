import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FilterField } from '../../types';
import Clear from '../Clear';

interface Props {
  fields: FilterField[]
  handleResetFilters: () => void;
}

const Filters: React.FC<Props> = ({
  fields,
  handleResetFilters
}) => {
  const { t } = useTranslation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  
  return (
    <Box sx={ { p: 2, pt: 0 } }>
      <Typography variant="h6" component="div" sx={ { mb: 2, mt: { sm: 2 } } }>
        { t('filters-title') }
      </Typography>

      <form noValidate onSubmit={ handleSubmit }>
        { fields.map(({ Field, space, ...props }) => (
          <React.Fragment key={ props.name }>
            <Field key={ props.name } { ...props }/>

            { space && <Clear /> }
          </React.Fragment>
        )) }

        <Button
          onClick={ handleResetFilters }
          type="button"
          sx={ { justifySelf: 'flex-end' } }
        >
          { t('reset-label') }
        </Button>
      </form>
    </Box>
  );
};

export default Filters;
