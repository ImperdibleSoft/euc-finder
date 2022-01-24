import { Box, useTheme } from '@mui/material';
import React, { useRef } from 'react';
import {
  Bar,
  BarChart as D3BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { useBreakpoints, useResize } from '../../../hooks';
import { BarchartData } from '../types';

interface Props<T = BarchartData> {
  data: T[];
  dataLabel?: keyof T;
  dataValue?: keyof T;
  dimensionName: string;
  formatter: (value: unknown, units?: string) => string;
  units?: string;
}

type BCT = <T>(props: Props<T>) => ReturnType<React.FC>;

const BarChart: BCT = ({ data, dataLabel, dataValue, dimensionName, formatter, units }) => {
  const theme = useTheme();
  const { sm } = useBreakpoints();

  const parentRef = useRef<HTMLDivElement>(null);
  const { rect } = useResize(parentRef);
  
  const curatedDataLabel = (dataLabel ?? '') as string;
  const curatedDataValue = (dataValue ?? '') as string;

  const customFormatter = (v: unknown) => {
    if (dataValue === 'battery') {
      return formatter({ wattsHour: v }, units);
    }

    return formatter(v, units);
  };

  return (
    <Box
      className="BarChart"
      ref={ parentRef }
      sx={ {
        '& .recharts-default-tooltip': {
          bgcolor: `${ theme.palette.background.paper } !important`,
          border: 'none !important',
          borderRadius: 1,
          boxShadow:
            '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          color: `${ theme.palette.text.primary } !important`
        },
        '& .recharts-tooltip-label': { color: `${ theme.palette.text.primary } !important` },
        '& .recharts-tooltip-item': { color: `${ theme.palette.text.secondary } !important` },
        '& .recharts-rectangle.recharts-tooltip-cursor': { display: 'none !important' }
      } }
    >
      <D3BarChart
        data={ data }
        height={ rect?.height ?? 300 }
        margin={ { top: 24 } }
        width={ rect?.width ?? 400 }
      >
        <CartesianGrid vertical={ false } />

        <XAxis
          dataKey={ curatedDataLabel }
          tickCount={ data.length }
          tickLine={ false }
        />

        <YAxis
          tickLine={ false }
          tickFormatter={ customFormatter }
          width={ sm ? 80 : 0 }
        />

        <Tooltip
          formatter={ customFormatter }
        />

        <Bar
          dataKey={ curatedDataValue }
          fill={ theme.palette.secondary.dark }
          fillOpacity={ 0.8 }
          name={ dimensionName }
          maxBarSize={ sm ? 50 : 40 }
        />
      </D3BarChart>
    </Box>
  );
};

export default BarChart;
