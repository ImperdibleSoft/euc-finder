import { FormControl, Icon, Input, InputLabel, InputAdornment } from '@mui/material';
import React from 'react';
import { formControlStyles } from '../constants';

export interface Props {
  defaultValue?: string
  fullWidth?: boolean
  icon?: string
  label?: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  style?: React.CSSProperties
  type: 'text' | 'number' | 'decimal'
  variant?: 'standard' | 'outlined' | 'filled'
  value?: string
}

const Text: React.FC<Props> = ({
  defaultValue,
  fullWidth = true,
  icon,
  label,
  name,
  onChange,
  placeholder,
  style,
  type = 'text',
  variant = 'standard',
  value
}) => {
  const renderIcon = () => {
    if (icon) {
      return (
        <InputAdornment position="start">
          <Icon fontSize="small">{ icon }</Icon>
        </InputAdornment>
      );
    }

    return undefined;
  };

  return (
    <FormControl
      fullWidth={ fullWidth }
      style={ { ...formControlStyles, ...style } }
      variant={ variant }
    >
      <InputLabel htmlFor={ name }>
        { label ?? name }
      </InputLabel>

      <Input
        defaultValue={ defaultValue }
        id={ name }
        name={ name }
        onChange={ onChange }
        placeholder={ placeholder }
        startAdornment={ renderIcon() }
        type={ type }
        value={ value }
      />
    </FormControl>
  );
};

export default Text;