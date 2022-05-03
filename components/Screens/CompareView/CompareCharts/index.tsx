/* eslint-disable max-lines */
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import React, { useMemo } from 'react';
import { TFunction } from 'react-i18next';
import { commonNs, useComparatorTranslations } from '../../../../hooks';
import { MeasureUnits } from '../../../../store/types';
import { MinMaxScores, ScoreCollection, TranslationFile, Wheel } from '../../../../types';
import * as formatters from '../../../../utils/formatters';
import { formatWheelName } from '../../../../utils';
import BarChart from '../../../Charts/BarChart';
import RadarChart from '../../../Charts/RadarChart';
import { RadarChartData } from '../../../Charts/types';

type ChartEntity = Wheel;

const getRandomColor = (i?: number) => {
  const colors = ['#f44336', '#3f51b5', '#4caf50', '#ffc107', '#d500f9'];

  if (i !== undefined && colors[1]) {
    return colors[i];
  }

  const hex = Math.floor(Math.random() * 0xFFFFFF);
  return `#${ hex.toString(16) }`;
};

interface CreateRadarChartProps {
  minMaxScores: MinMaxScores;
  t: TFunction<'translation'>;
  wheels: Wheel[];
  wheelScores: ScoreCollection;
}

const createRadarChartFromWheels = ({
  minMaxScores,
  t,
  wheelScores,
  wheels
}: CreateRadarChartProps): RadarChartData[] => {
  const features: (keyof MinMaxScores)[] = ['score', 'range', 'maxSpeed', 'ratedPower', 'weight'];

  const radars: RadarChartData[] = features.map(f => ({
    key: `${ f }`,
    subject: t(`${ f }`, { ns: f === 'score' ? TranslationFile.comparator : TranslationFile.common }),
    fullMark: 20
  }));

  const wheelIds = wheels.map(w => w.id);

  wheelIds.forEach(wheelId => {
    radars.forEach((r, i) => {
      const score = wheelScores[wheelId][r.key];
      const max = minMaxScores[r.key]?.[1];

      radars[i][wheelId] = (score && max)
        ? Number(((20 * score) / (r.key !== 'score' ? 20 : max)).toFixed(2))
        : score || 0;
    });
  });

  return radars;
};

interface Props {
  measureUnits: MeasureUnits;
  minMaxScores: MinMaxScores;
  wheels: Wheel[];
  wheelScores: ScoreCollection;
}

const CompareCharts: React.FC<Props> = ({ measureUnits, minMaxScores, wheels, wheelScores }) => {
  const { t } = useComparatorTranslations();
  const commonGridProps = {
    item: true,
    xs: 12,
    md: 6
  };

  const { colors, wheelNames } = useMemo(() => {
    const c: {[key: string]: string} = {};
    const n: {[key: string]: string} = {};

    wheels.map((wheel, i) => {
      c[wheel.id] = getRandomColor(i);
      n[wheel.id] = formatWheelName(wheel, []);
    });

    return {
      colors: c,
      wheelNames: n
    };
  }, [wheels]);

  const commonChartProps = {
    data: wheels.map(w => ({ ...w, battery: w.battery.wattsHour }) as unknown as Wheel),
    dataLabel: 'name' as keyof ChartEntity
  };

  const customFormatter = (formatter: Function) =>
    (value: unknown, units?: string) => formatter(value, t, units);

  const radarChartData = createRadarChartFromWheels({
    minMaxScores,
    t,
    wheels,
    wheelScores
  });

  return (
    <>
      <Card sx={ { mt: 2 } }>
        <RadarChart colors={ colors } data={ radarChartData } wheelNames={ wheelNames } />
      </Card>

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
    </>
  );
};

export default CompareCharts;
