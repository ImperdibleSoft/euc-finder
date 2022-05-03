import { Box } from '@mui/material';
import React, { useMemo, useRef } from 'react';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as D3RadarChart
} from 'recharts';
import { HorizontalAlignmentType, VerticalAlignmentType } from 'recharts/types/component/DefaultLegendContent';
import { LayoutType } from 'recharts/types/util/types';
import { useBreakpoints, useResize } from '../../../hooks';
import { RadarChartData } from '../types';

const requiredMinWidth = 410;
const maxRadarChartWidth = 920;
const legendWidth = 200;

interface Props {
  colors: {[key: string]: string};
  data: RadarChartData[];
  wheelNames: {[key: string]: string};
}

const RadarChart = ({ colors, data, wheelNames }: Props): JSX.Element => {
  const { md } = useBreakpoints();

  const parentRef = useRef<HTMLDivElement>(null);
  const { rect } = useResize(parentRef);

  const { legendProps, wrapperProps } = useMemo(() => {
    const parentWidth = rect?.width || 400;
    const limitedWidth = (parentWidth >= maxRadarChartWidth)
      ? maxRadarChartWidth
      : parentWidth;

    if (!md) {
      return {
        legendProps: {
          align: 'center' as HorizontalAlignmentType,
          layout: 'vertical' as LayoutType,
          verticalAlign: 'bottom' as VerticalAlignmentType
        },
        wrapperProps: {
          height: limitedWidth,
          width: limitedWidth
        }
      };
    }

    const calculatedWidth = limitedWidth >= requiredMinWidth
      ? limitedWidth - legendWidth
      : requiredMinWidth;

    return {
      legendProps: {
        align: 'right' as HorizontalAlignmentType,
        layout: 'vertical' as LayoutType,
        verticalAlign: 'middle' as VerticalAlignmentType
      },
      wrapperProps: {
        height: calculatedWidth,
        width: calculatedWidth
      }
    };
  }, [rect, md]);

  const { fullMark, key, subject, ...wheelData } = data[0] ?? {};
  const wheelIds = Object.keys(wheelData);

  return (
    <Box
      className="BarChart"
      ref={ parentRef }
      sx={ {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-start',
        '& .recharts-wrapper': {
          alignItems: 'center',
          display: 'flex',
          flex: 1,
          flexDirection: {
            xs: 'column',
            md: 'row'
          },
          justifyContent: 'center',
          pb: {
            xs: 2,
            md: 0
          },
          width: '100% !important'
        },
        '& .recharts-wrapper > svg': {
          display: 'flex !important',
          flex: 1,
          position: 'relative !important'
        },
        '& .recharts-legend-wrapper': {
          display: 'flex !important',
          bottom: 'initial !important',
          left: 'initial !important',
          position: 'relative !important',
          right: 'initial !important',
          top: 'initial !important',
          width: { md: `${ legendWidth }px !important` } 
        },
        '& .recharts-default-legend': { width: '100%' },
        '& .recharts-legend-item': {
          alignItems: 'center',
          display: 'flex !important',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          mb: 1,
          ml: {
            xs: '0px !important',
            md: '8px !important'
          },
          mr: '0px !important',
          position: 'relative'
        }
      } }
    >
      <D3RadarChart
        { ...wrapperProps }
        data={ data }
      >
        <PolarGrid />

        <PolarAngleAxis dataKey="subject" />

        <PolarRadiusAxis angle={ 90 } domain={ [0, 20] } />

        { wheelIds.map((wheelId) => (
          <Radar
            key={ wheelId }
            name={ wheelNames[wheelId] }
            dataKey={ wheelId }
            stroke={ colors[wheelId] }
            strokeWidth={ 2 }
            strokeOpacity={ 1 }
            fill={ colors[wheelId] }
            fillOpacity={ 0.05 }
          />
        )) }

        <Legend { ...legendProps } />
      </D3RadarChart>
    </Box>
  );
};

export default RadarChart;
