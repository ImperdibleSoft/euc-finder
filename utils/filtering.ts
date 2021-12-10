import { SettingsState } from '../store/types';
import { Wheel, WheelFilters } from '../types';
import { getMaximumValue, getMinimumValue } from './collections';
import {
  getConvertedDiameter,
  getConvertedGroundClearance,
  getConvertedRange,
  getConvertedSpeed,
  getConvertedWeight
} from './conversions';
import { getEstimatedMaxRange } from './range';
import { getWheelCategory } from './wheels';

export const filterWheels = (wheel: Wheel, filters: WheelFilters, units: SettingsState['measureUnits']) => {
  const diameter = Number(getConvertedDiameter(wheel.diameter, units.diameter));
  const maxGroundClearance = Number(getConvertedGroundClearance(
    getMaximumValue(wheel.groundClearance),
    units.groundClearance
  ));
  const maxSpeed = Number(getConvertedSpeed(wheel.maxSpeed, units.maxSpeed));
  const minGroundClearance = Number(getConvertedGroundClearance(
    getMinimumValue(wheel.groundClearance),
    units.groundClearance
  ));
  const range = Number(getConvertedRange(getEstimatedMaxRange(wheel.range), units.range));
  const weight = Number(getConvertedWeight(wheel.weight, units.weight));
  const width = Number(getConvertedDiameter(wheel.width, units.diameter));

  return (
    filters.categories.includes(getWheelCategory(wheel))
    && filters.brandId.includes(wheel.brandId)

    && (!filters.maxPrice || !wheel.price || wheel.price <= Number(filters.maxPrice))
    && (!filters.minPrice || !wheel.price || wheel.price >= Number(filters.minPrice))

    && (!filters.maxMaxSpeed || !wheel.maxSpeed || maxSpeed <= Number(filters.maxMaxSpeed))
    && (!filters.minMaxSpeed || !wheel.maxSpeed || maxSpeed >= Number(filters.minMaxSpeed))

    && (!filters.maxDiameter || !wheel.diameter || diameter <= Number(filters.maxDiameter))
    && (!filters.minDiameter || !wheel.diameter || diameter >= Number(filters.minDiameter))
    && (!filters.maxWidth || !wheel.width || width <= Number(filters.maxWidth))
    && (!filters.minWidth || !wheel.width || width >= Number(filters.minWidth))

    && (
      !filters.minRange
      || !wheel.range
      || range >= Number(filters.minRange)
    )
    && (!filters.maxWeight || weight <= Number(filters.maxWeight))

    && (
      !filters.minGroundClearance
      || !wheel.groundClearance
      || (maxGroundClearance >= Number(filters.minGroundClearance))
    )
    && (
      !filters.maxGroundClearance
      || !wheel.groundClearance
      || (minGroundClearance <= Number(filters.maxGroundClearance))
    )

    && (!filters.minPower || !wheel.ratedPower || wheel.ratedPower >= Number(filters.minPower))
    && (!filters.minVoltage || !wheel.voltage || wheel.voltage >= Number(filters.minVoltage))
    
    && (
      !filters.minBatteryParallels
      || wheel.battery.parallels >= Number(filters.minBatteryParallels)
    )
    && (
      !filters.maxBatteryParallels
      || wheel.battery.parallels <= Number(filters.maxBatteryParallels)
    )
    && (
      !filters.minBatteryOutput
      || wheel.battery.wattsHour >= Number(filters.minBatteryOutput)
    )
    && (
      !filters.batteryType
      || wheel.battery.type.includes(filters.batteryType)
    )
    
    && (
      !filters.color
      || (!!wheel.color && typeof wheel.color === 'string' && wheel.color === filters.color)
      || (!!wheel.color && typeof wheel.color !== 'string' && wheel.color.includes(filters.color))
    )
    && (
      filters.trolleyHandle === undefined
      || (filters.trolleyHandle === true && wheel.trolleyHandle !== undefined)
      || wheel.trolleyHandle === filters.trolleyHandle
    )
    && (
      filters.antiSpin === undefined
      || (filters.antiSpin === true && wheel.antiSpin !== undefined)
      || wheel.antiSpin === filters.antiSpin
    )
    && (
      filters.kickstand === undefined
      || (filters.kickstand === true && wheel.kickstand !== undefined)
      || wheel.kickstand === filters.kickstand
    )
    && (
      filters.suspension === undefined
      || (filters.suspension === true && wheel.suspension !== undefined)
      || (filters.suspension === false && wheel.suspension === undefined)
      || wheel.suspension === filters.suspension
    )
    
    && (
      filters.leds === undefined
      || (filters.leds && wheel.leds)
      || (!filters.leds && !wheel.leds)
    )
    && (
      filters.sound === undefined
      || (filters.sound === true && wheel.sound !== undefined)
      || wheel.sound === filters.sound
    )
    && (
      filters.display === undefined
      || (filters.display === true && wheel.display !== undefined)
      || (filters.display === false && wheel.display === undefined)
      || wheel.display === filters.display
    )
  );
};