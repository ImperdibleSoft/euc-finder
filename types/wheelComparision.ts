import { WheelFeatures } from './wheel';

export type WheelScoreValues = keyof WheelFeatures;

export type MinMaxValues = Record<WheelScoreValues, [number, number]>;

export type MinMaxScores = Record<WheelScoreValues | 'score', [number, number]>;

export type WheelScoreProps = WheelScoreValues | 'brandId' | 'score';

export type WheelScore = Record<WheelScoreProps, number>

export interface ScoreCollection {
  [wheelId: string]: WheelScore;
}