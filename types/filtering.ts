import React from 'react';
import { Order  } from '.';
import { CheckboxProps } from '../components/Form/Checkbox';
import { DropdownItem } from '../components/Form/Dropdown';
import { Props as TextProps } from '../components/Form/Text';
import { BrandId } from './brands';
import { WheelFeatures } from './wheel';
import { WheelSortingKeys } from './sorting';
import { AntiSpin, Category, Color, Display, Kickstand, SoundSystem, TrolleyHandle, Suspension } from './wheelFeatures';

export interface WheelFilters {
  brandId: BrandId[]
  categories: Category[]

  maxPrice?: string
  minPrice?: string
  
  maxDiameter?: string
  minDiameter?: string
  maxWidth?: string
  minWidth?: string

  maxMaxSpeed?: string
  minMaxSpeed?: string

  minRange?: string
  maxWeight?: string
  
  minPower?: string
  minVoltage?: string
  minBatteryOutput?: string

  color?: Color
  trolleyHandle?: TrolleyHandle | true
  antiSpin?: AntiSpin | true
  kickstand?: Kickstand | true
  suspension?: Suspension | boolean
  
  maxGroundClearance?: string
  minGroundClearance?: string
  
  leds?: boolean
  sound?: SoundSystem | true
  display?: Display | boolean
}

export interface WheelSorting {
  key: WheelSortingKeys
  order: Order
}

type WheelFeatureKeys = Omit<Omit<WheelFeatures, 'price'>, 'peakPower'>
export type WheelsTableColumns = Record<keyof WheelFeatureKeys, boolean>


interface CommonFilterProps {
  icon?: string
  label: string
  name: string
  space?: boolean
  value?: string
}

interface FilterCheckboxGroup extends CommonFilterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Field: React.FC<any>
  options: CheckboxProps[]
}

interface FilterDropdown extends CommonFilterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Field: React.FC<any>
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: DropdownItem[]
}

interface FilterText extends CommonFilterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Field: React.FC<any>
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: TextProps['type']
}

export type FilterField = FilterCheckboxGroup | FilterDropdown | FilterText