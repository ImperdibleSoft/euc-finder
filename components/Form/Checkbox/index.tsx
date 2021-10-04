import { FormControl, FormControlLabel, Checkbox as MaterialCheckbox } from '@mui/material';
import React from 'react';
import { formControlStyles } from '../constants';

export interface CheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  fullWidth?: boolean
  label?: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  small?: boolean
  style?: React.CSSProperties
  variant?: 'standard' | 'outlined' | 'filled'
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  defaultChecked,
  fullWidth = true,
  label,
  name,
  onChange,
  small,
  style,
  variant = 'standard'
}) => (
  <FormControl
    fullWidth={ fullWidth }
    size={ small ? 'small' : 'medium' }
    style={ { ...formControlStyles, ...style } }
    variant={ variant }
  >
    <FormControlLabel
      control={
        <MaterialCheckbox
          defaultChecked={ defaultChecked }
          checked={ checked }
          id={ name }
          name={ name }
          onChange={ onChange }
          size={ small ? 'small' : 'medium' }
          sx={ { py: small ? 0 : undefined } }
        />
      }
      label={ label ?? name }
    />
  </FormControl>
);

export default Checkbox;