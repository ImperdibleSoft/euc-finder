import { Box, Grid, Input, Slider as MuiSlider, Typography } from '@mui/material';
import React from 'react';

export interface Props {
  defaultValue?: string;
  fullWidth?: boolean;
  // icon?: string;
  label?: string;
  max?: number;
  min?: number;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  step?: number;
  style?: React.CSSProperties;
  value?: number;
}

const Slider: React.FC<Props> = ({
  defaultValue,
  fullWidth = true,
  // icon,
  label,
  max = 100,
  min = 0,
  name,
  onChange,
  step = 10,
  style,
  value
}) => {
  let timeout: NodeJS.Timeout;
  const handleSliderChange = (event: Event) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const parsedEvent = event as unknown as React.ChangeEvent<HTMLInputElement>;

      onChange({
        ...parsedEvent,
        target: {
          ...parsedEvent.target,
          name
        }
      });
    }, 300);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...event,
      target: {
        ...event.target,
        name
      }
    });
  };

  return (
    <Box sx={ { width: fullWidth ? '100%' : 250 } } style={ { ...style } }>
      <Typography id={ `${ name }-label` } gutterBottom>
        { label }
      </Typography>

      <Grid container spacing={ 2 } alignItems="center">
        <Grid item xs>
          <MuiSlider
            aria-labelledby={ `${ name }-label` }
            max={ max }
            min={ min }
            onChange={ handleSliderChange }
            step={ step }
            value={ value }
          />
        </Grid>

        <Grid item>
          <Input
            defaultValue={ defaultValue }
            id={ name }
            inputProps={ {
              'aria-labelledby': `${ name }-label`,
              max,
              min,
              step,
              style: { textAlign: 'right' },
              type: 'number'
            } }
            onChange={ handleInputChange }
            size="small"
            sx={ { width: '42px' } }
            value={ value }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Slider;