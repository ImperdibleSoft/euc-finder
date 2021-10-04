import {
  FormControl,
  Icon,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectProps
} from '@mui/material';
import React from 'react';
import { formControlStyles } from '../constants';

export interface DropdownItem {
  icon?: string
  label: string
  value?: string
}

export interface Props {
  defaultValue?: string
  fullWidth?: boolean
  icon?: string
  label?: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: DropdownItem[]
  style?: React.CSSProperties
  variant?: 'standard' | 'outlined' | 'filled'
  value?: string
}

const Dropdown: React.FC<Props> = ({
  defaultValue,
  fullWidth = true,
  icon,
  label,
  name,
  onChange,
  options,
  style,
  variant = 'standard',
  value
}) => {
  const handleChange: SelectProps<string>['onChange'] = (event) => {
    onChange(event as unknown as React.ChangeEvent<HTMLSelectElement>);
  };

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
      <InputLabel id={ name }>{ label ?? name }</InputLabel>

      { /* eslint-disable-next-line jsx-a11y/no-onchange */ }
      <Select
        defaultValue={ defaultValue }
        labelId={ name }
        name={ name }
        onChange={ handleChange }
        value={ value }
        startAdornment={ renderIcon() }
      >
        { options.map(option => (
          <MenuItem
            key={ option.value ?? 'undefined' }
            value={ option.value }
          >
            { !!option.icon && (
              <Icon color="action" fontSize="small" sx={ { mr: 1 } }>{ option.icon }</Icon>
            ) }
            <span>{ option.label }</span>
          </MenuItem>
        )) }
      </Select>
    </FormControl>
  );
};

export default Dropdown;