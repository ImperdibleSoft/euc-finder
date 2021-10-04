import { Button, Card, CardActions, CardContent } from '@mui/material';
import React from 'react';
import Checkbox from '../Form/Checkbox';
import { wheelFeatureNames } from '../../constants/wheelFeatures';
import { WheelsTableColumns } from '../../types';

interface Props {
  columns: WheelsTableColumns,
  handleHide: (key: keyof WheelsTableColumns) => void
  handleReset: () => void
  handleShow: (key: keyof WheelsTableColumns) => void
}

const Columns: React.FC<Props> = ({ columns, handleHide, handleReset, handleShow }) => {
  const renderColumnCheckbox = (key: string) => {
    const label = wheelFeatureNames[key as keyof WheelsTableColumns];
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
    <Card sx={ { minWidth: 275 } }>
      <CardContent>
        <h3>Columnas</h3>

        <form noValidate onSubmit={ handleSubmit }>
          { Object.keys(columns).map(renderColumnCheckbox) }

          <CardActions style={ { justifyContent: 'flex-end' } }>
            <Button onClick={ handleReset } type="button">Reiniciar</Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};

export default Columns;