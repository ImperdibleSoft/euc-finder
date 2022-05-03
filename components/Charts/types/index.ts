import { MinMaxScores } from '../../../types';

export interface BarChartData {
  key: string;
  value: number;
}

export interface RadarChartData {
  key: keyof MinMaxScores;
  subject: string;
  fullMark: number;
  [key: string]: string | number;
}
