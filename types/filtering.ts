import React from 'react';
import { VideoCategory, InfluencerId, Order, WheelId  } from '.';
import { CheckboxProps } from '../components/Form/Checkbox';
import { DropdownItem } from '../components/Form/Dropdown';
import { Props as TextProps } from '../components/Form/Text';
import { BrandId } from './brands';
import { WheelFeatures } from './wheel';
import { WheelSortingKeys } from './sorting';
import { AntiSpin, Category, Color, Display, Kickstand, SoundSystem, TrolleyHandle, Suspension } from './wheelFeatures';

export interface VideoFilters {
  categories: VideoCategory[];
  influencers: InfluencerId[];
  wheels: WheelId[];
}

export interface WheelFilters {
  categories: Category[];
  brandId: BrandId[];

  maxMaxSpeed?: string;
  minMaxSpeed?: string;

  minRange?: string;
  maxWeight?: string;

  maxPrice?: string;
  minPrice?: string;
  
  maxDiameter?: string;
  minDiameter?: string;
  maxWidth?: string;
  minWidth?: string;
  
  maxGroundClearance?: string;
  minGroundClearance?: string;

  minPower?: string;
  minVoltage?: string;
  suspension?: Suspension | boolean;

  minBatteryParallels?: string;
  maxBatteryParallels?: string;
  minBatteryOutput?: string;
  batteryType?: string;

  color?: Color;
  trolleyHandle?: TrolleyHandle | true;
  antiSpin?: AntiSpin | true;
  kickstand?: Kickstand | true;
  
  leds?: boolean;
  sound?: SoundSystem | true;
  display?: Display | boolean;
}

export interface WheelSorting {
  key: WheelSortingKeys;
  order: Order;
}

type WheelFeatureKeys = Omit<Omit<WheelFeatures, 'price'>, 'peakPower'>;
export type WheelsTableColumns = Record<keyof WheelFeatureKeys, boolean>;


interface CommonFilterProps {
  icon?: string;
  label: string;
  name: string;
  space?: boolean;
  value?: string | string[];
}

interface FilterCheckboxGroup extends CommonFilterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Field: React.FC<any>;
  options: CheckboxProps[];
  value?: string;
}

interface FilterDropdown extends CommonFilterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Field: React.FC<any>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: DropdownItem[];
  value?: string;
}

interface FilterMultipleSelect extends CommonFilterProps {
  allOptionsLabel: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Field: React.FC<any>;
  onChange: (value: string[]) => void;
  options: DropdownItem[];
  value?: string[]
}

interface FilterText extends CommonFilterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Field: React.FC<any>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: TextProps['type'];
  value?: string;
}

export type FilterField = FilterCheckboxGroup | FilterDropdown | FilterMultipleSelect | FilterText;