import { Wheel } from './wheel';

export type SortKeys = Omit<Wheel, 'id'>
export type WheelSortingKeys = keyof SortKeys