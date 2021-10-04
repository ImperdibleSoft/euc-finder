import { FormControl, FormGroup, FormLabel, Icon, Typography } from '@mui/material';
import React from 'react';
import Checkbox, { CheckboxProps } from '../Checkbox';
import { formControlStyles } from '../constants';

interface Props {
  fullWidth?: boolean
  icon?: string
  label?: string
  name: string
  options: CheckboxProps[]
}

const CheckboxGroup: React.FC<Props> = ({ fullWidth = true, icon, label, name, options  }) => (
  <FormControl
    component="fieldset"
    fullWidth={ fullWidth }
    variant="standard"
    style={ formControlStyles }
  >
    <FormLabel
      component="legend"
      sx={ { alignItems: 'center', display: 'flex', mb: 1, width: '100%' } }
    >
      { !!icon && <Icon sx={ { mr: 1 } }>{ icon }</Icon> }
      <Typography component="span">{ label ?? name }</Typography>
    </FormLabel>

      
    <FormGroup sx={ { pl: 2 } }>
      { options.map(option => (
        <Checkbox
          key={ option.name }
          { ...option }
          small
        />
      )) }
    </FormGroup>
  </FormControl>
);

export default CheckboxGroup;