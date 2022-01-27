import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import React from 'react';
import { commonNs, useComparatorTranslations } from '../../../../hooks';
import { MeasureUnits } from '../../../../store/types';
import { Wheel } from '../../../../types';
import * as formatters from '../../../../utils/formatters';
import BarChart from '../../../Charts/BarChart';

type ChartEntity = Wheel;

interface Props {
  measureUnits: MeasureUnits;
  wheels: Wheel[];
}

const CompareCharts: React.FC<Props> = ({ measureUnits, wheels }) => {
  const { t } = useComparatorTranslations();
  const commonGridProps = {
    item: true,
    xs: 12,
    md: 6
  };

  const commonChartProps = {
    data: wheels.map(w => ({ ...w, battery: w.battery.wattsHour }) as unknown as Wheel),
    dataLabel: 'name' as keyof ChartEntity
  };

  const customFormatter = (formatter: Function) =>
    (value: unknown, units?: string) => formatter(value, t, units);

  return (
    <Grid className="CompareCharts" container spacing={ 2 } sx={ { mt: 0.5 } }>
      <Grid { ...commonGridProps }>
        <Card>
          <CardHeader
            title={ t('maxSpeed', commonNs) }
            subheader={ t('higherBetter-msg') }
          />

          <CardContent>
            <BarChart<ChartEntity>
              { ...commonChartProps }
              dataValue="maxSpeed"
              dimensionName={ t('maxSpeed', commonNs) }
              formatter={ customFormatter(formatters.speed) }
              units={ measureUnits.maxSpeed }
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid { ...commonGridProps }>
        <Card>
          <CardHeader
            title={ t('battery', commonNs) }
            subheader={ t('higherBetter-msg') }
          />

          <CardContent>
            <BarChart<ChartEntity>
              { ...commonChartProps }
              dataValue="battery"
              dimensionName={ t('battery', commonNs) }
              formatter={ customFormatter(formatters.battery) }
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid { ...commonGridProps }>
        <Card>
          <CardHeader
            title={ t('ratedPower', commonNs) }
            subheader={ t('higherBetter-msg') }
          />

          <CardContent>
            <BarChart<ChartEntity>
              { ...commonChartProps }
              dataValue="ratedPower"
              dimensionName={ t('ratedPower', commonNs) }
              formatter={ customFormatter(formatters.power) }
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid { ...commonGridProps }>
        <Card>
          <CardHeader
            title={ t('weight', commonNs) }
            subheader={ t('lowerBetter-msg') }
          />

          <CardContent>
            <BarChart<ChartEntity>
              { ...commonChartProps }
              dataValue="weight"
              dimensionName={ t('weight', commonNs) }
              formatter={ customFormatter(formatters.weight) }
              units={ measureUnits.weight }
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CompareCharts;
