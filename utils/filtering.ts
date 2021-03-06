import { MeasureUnits } from '../store/types';
import { Wheel, WheelFilters } from '../types';
import { getMaximumValue, getMinimumValue } from './collections';
import {
  getChargingTime,
  getConvertedDiameter,
  getConvertedGroundClearance,
  getConvertedRange,
  getConvertedSpeed,
  getConvertedWeight
} from './conversions';
import { getWheelCategory } from './wheels';

export const filterWheels = (wheel: Wheel, filters: WheelFilters, units: MeasureUnits) => {
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
  const range = Number(getConvertedRange(wheel.range, units.range));
  const weight = Number(getConvertedWeight(wheel.weight, units.weight));
  const width = Number(getConvertedDiameter(wheel.width, units.diameter));

  const [pedalType, pedalSurface, retentionPins = false] = wheel.pedals;
  const [pedalLength, pedalWidth] = wheel.pedalSize;
  const category = getWheelCategory(wheel);

  const stockCharger = wheel.stockCharger && wheel.voltage && wheel.battery.wattsHour
    ? Number(getChargingTime({
      tension: wheel.stockCharger * (wheel.chargePorts || 1),
      voltage: wheel.voltage,
      wattsHour: wheel.battery.wattsHour
    }))
    : undefined;
  const maxCharger = wheel.maxCharger && wheel.voltage && wheel.battery.wattsHour
    ? Number(getChargingTime({
      tension: wheel.maxCharger * (wheel.chargePorts || 1),
      voltage: wheel.voltage,
      wattsHour: wheel.battery.wattsHour
    }))
    : undefined;
  const usbPorts = wheel.usbPorts?.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return (
    filters.availability.includes(wheel.availability)
    && (filters.categories.length === 4 || (category && filters.categories.includes(category)))
    && filters.brandId.includes(wheel.brandId)

    && (!filters.maxPrice || wheel.price <= Number(filters.maxPrice))
    && (!filters.minPrice || wheel.price >= Number(filters.minPrice))

    && (!filters.maxMaxSpeed || maxSpeed <= Number(filters.maxMaxSpeed))
    && (!filters.minMaxSpeed || maxSpeed >= Number(filters.minMaxSpeed))

    && (!filters.maxDiameter || diameter <= Number(filters.maxDiameter))
    && (!filters.minDiameter || diameter >= Number(filters.minDiameter))
    && (!filters.maxWidth || width <= Number(filters.maxWidth))
    && (!filters.minWidth || width >= Number(filters.minWidth))

    && (!filters.minRange || range >= Number(filters.minRange))
    && (!filters.maxWeight || weight <= Number(filters.maxWeight))

    && (!filters.minGroundClearance || (maxGroundClearance >= Number(filters.minGroundClearance)))
    && (!filters.maxGroundClearance || (minGroundClearance <= Number(filters.maxGroundClearance)))
    && (!filters.pedalType || pedalType === filters.pedalType)
    && (!filters.pedalSurface || pedalSurface === filters.pedalSurface)
    && (
      filters.retentionPins === undefined
      || (filters.retentionPins && retentionPins)
      || (!filters.retentionPins && !retentionPins)
    )
    && (!filters.pedalLength || !pedalLength || (pedalLength >= Number(filters.pedalLength)))
    && (!filters.pedalWidth || !pedalWidth || (pedalWidth >= Number(filters.pedalWidth)))
    

    && (!filters.minPower || wheel.ratedPower >= Number(filters.minPower))
    && (!filters.maxPower || wheel.ratedPower <= Number(filters.maxPower))
    && (!filters.minVoltage || wheel.voltage >= Number(filters.minVoltage))
    
    && (!filters.minBatteryParallels || wheel.battery.parallels >= Number(filters.minBatteryParallels))
    && (!filters.maxBatteryParallels || wheel.battery.parallels <= Number(filters.maxBatteryParallels))
    && (!filters.minBatteryOutput || wheel.battery.wattsHour >= Number(filters.minBatteryOutput))
    && (!filters.batteryType || wheel.battery.type.includes(filters.batteryType))

    && (!filters.stockCharger || !stockCharger || (stockCharger <= Number(filters.stockCharger)))
    && (!filters.maxCharger || !maxCharger || (maxCharger <= Number(filters.maxCharger)))
    && (!filters.chargePorts || !wheel.chargePorts || (wheel.chargePorts >= Number(filters.chargePorts)))
    && (!filters.usbPorts || usbPorts === undefined || (usbPorts >= Number(filters.usbPorts)))
    
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
