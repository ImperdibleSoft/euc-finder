import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useVideosTranslations } from '../../../../hooks';
import { FilterField } from '../../../../types';
import Clear from '../../../Clear';
import Collapsable from '../../../Collapsable';

interface Props {
  collapsedSize?: string;
  fields: FilterField[]
  handleResetFilters: () => void;
}

const VideoFilters: React.FC<Props> = ({
  collapsedSize,
  fields,
  handleResetFilters
}) => {
  const { t } = useVideosTranslations();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  
  return (
    <Box sx={ { p: 2, pt: 0 } }>
      <Collapsable collapsedSize={ collapsedSize }>
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
            { t('resetFilters-btn') }
          </Button>
        </form>
      </Collapsable>
    </Box>
  );
};

export default VideoFilters;
