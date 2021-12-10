import React from 'react';
import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  Icon,
  InputAdornment,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';
import { DropdownItem } from '../Dropdown';

interface Props {
  defaultValue?: string[];
  fullWidth?: boolean;
  icon?: string;
  label?: string;
  name: string;
  onChange: (value: string[]) => void;
  options: DropdownItem[];
  placeholder?: string;
  style?: React.CSSProperties;
  variant?: 'standard' | 'outlined' | 'filled';
  value?: string[];
}

const MultiSelect: React.FC<Props> = ({
  defaultValue = [],
  icon,
  label,
  name,
  onChange,
  options,
  placeholder,
  variant = 'standard',
  value = []
}) => {
  const isAllSelected = options.length > 0 && value.length === options.length;
  const isIndeterminate = value.length > 0 && value.length < options.length;

  const allOptions: DropdownItem = {
    label: 'All options',
    value: 'all'
  };

  const renderIcon = () => {
    if (icon) {
      return (
        <InputAdornment position="start">
          <Icon fontSize="small">{ icon }</Icon>
        </InputAdornment>
      );
    }

    return null;
  };

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const val = event.target.value;
      
    if (allOptions.value && val.includes(allOptions.value)) {
      onChange(isAllSelected ? [] : options.map(o => o.value).filter(o => !!o) as string[]);
      return;
    }

    if (Array.isArray(val)) {
      onChange(val);
      return;
    }

    onChange([val]);
  };

  const renderValue = (selected: string[] = []) => (
    <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 0.5 } }>
      { selected.map(s => {
        const opt = options.find(o => o.value === s);

        if (opt?.value) {
          return <Chip key={ opt.value } label={ opt.label } />;
        }

        return null;
      }) }
    </Box>
  );

  return (
    <FormControl sx={ { my: 1, width: '100%' } }>

      <InputLabel id={ name }>
        { label }
      </InputLabel>

      <Select
        autoWidth
        defaultValue={ defaultValue }
        labelId={ name }
        MenuProps={ {
          // PaperProps: { style: { width: FILTERS_SIDEBAR_WIDTH - 32 } },
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'center'
          }
        } }
        multiple
        onChange={ handleChange }
        placeholder={ placeholder }
        renderValue={ renderValue }
        startAdornment={ renderIcon() }
        value={ value }
        variant={ variant }
      >
        <MenuItem
          value={ allOptions.value }
          sx={ {
            root: {
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.08)' }
            } 
          } }
        >
          <ListItemIcon>
            <Checkbox
              sx={ { color: isIndeterminate ? '#f50057' : '' } }
              checked={ isAllSelected }
              indeterminate={ isIndeterminate }
            />
          </ListItemIcon>
        
          <ListItemText
            sx={ { primary: { fontWeight: 500 } } }
            primary={ allOptions.label }
          />
        </MenuItem>

        { options.map((option) => {
          const isChecked = value.findIndex(v => v === option.value) > -1;

          return (
            <MenuItem key={ option.label } value={ option.value ?? option.label }>
              <ListItemIcon>
                <Checkbox checked={ isChecked } />
              </ListItemIcon>

              <ListItemText primary={ option.label } />
            </MenuItem>
          );}) }
      </Select>
    </FormControl>
  );
};

export default MultiSelect;