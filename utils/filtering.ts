import { Wheel, WheelFilters } from '../types';
import { getMaximumValue, getMinimumValue } from './collections';

export const filterWheels = (wheel: Wheel, filters: WheelFilters) => (
  filters.brandId.includes(wheel.brandId)

  && (!filters.maxPrice || !wheel.price || wheel.price <= Number(filters.maxPrice))
  && (!filters.minPrice || !wheel.price || wheel.price >= Number(filters.minPrice))

  && (!filters.maxDiameter || !wheel.diameter || wheel.diameter <= Number(filters.maxDiameter))
  && (!filters.minDiameter || !wheel.diameter || wheel.diameter >= Number(filters.minDiameter))
  && (!filters.maxWidth || !wheel.width || wheel.width <= Number(filters.maxWidth))
  && (!filters.minWidth || !wheel.width || wheel.width >= Number(filters.minWidth))

  && (!filters.maxMaxSpeed || !wheel.maxSpeed || wheel.maxSpeed <= Number(filters.maxMaxSpeed))
  && (!filters.minMaxSpeed || !wheel.maxSpeed || wheel.maxSpeed >= Number(filters.minMaxSpeed))

  && (!filters.battery || !wheel.battery || wheel.battery >= Number(filters.battery))
  && (!filters.minRange || !wheel.range || wheel.range >= Number(filters.minRange))
  && (!filters.maxWeight || wheel.weight <= Number(filters.maxWeight))

  && (!filters.minPower || !wheel.ratedPower || wheel.ratedPower >= Number(filters.minPower))
  && (!filters.minVoltage || !wheel.voltage || wheel.voltage >= Number(filters.minVoltage))
  && (!filters.minBatteryOutput || !wheel.batteryOutput || wheel.batteryOutput >= Number(filters.minBatteryOutput))
  
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
    !filters.minGroundClearance
    || !wheel.groundClearance
    || (!!wheel.groundClearance && getMaximumValue(wheel.groundClearance) >= Number(filters.minGroundClearance))
  )
  && (
    !filters.maxGroundClearance
    || !wheel.groundClearance
    || (!!wheel.groundClearance && getMinimumValue(wheel.groundClearance) <= Number(filters.maxGroundClearance))
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