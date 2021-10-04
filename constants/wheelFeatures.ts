import {
  AntiSpinWeight,
  DisplayWeight,
  KickstandWeight,
  SoundSystemWeight,
  SuspensionWeight,
  TrolleyHandleWeight,
  WheelFeatureFormatters,
  WheelFeatureIcons,
  WheelFeatureNames
} from '../types';
import * as formatters from '../utils/formatters';

export const wheelFeatureIcons: WheelFeatureIcons = {
  brandId: 'business',
  name: 'sort_by_alpha',
  price: 'euro',

  ratedPower: 'bolt',
  peakPower: 'offline_bolt',
  maxGradibility: 'filter_hdr',
  maxSpeed: 'speed',
  battery: 'battery_full',
  batteryOutput: 'battery_charging_full',
  range: 'space_bar',
  voltage: 'power',

  diameter: 'panorama_fish_eye',
  width: 'settings_ethernet',
  groundClearance: 'height',
  weight: 'fitness_center',
  // weight: 'file_download',
  trolleyHandle: 'pan_tool',
  antiSpin: 'autorenew',
  kickstand: 'gavel',
  headlight: 'highlight',
  tailLight: 'tungsten',
  leds: 'light_mode',
  sound: 'volume_up',
  display: 'smart_screen',
  suspension: 'file_download',
  color: 'water_drop'
};

export const wheelFeatureNames: WheelFeatureNames = {
  id: 'ID',
  brandId: 'Fabricante',
  name: 'Nombre',
  price: 'Precio (€)',

  ratedPower: 'Potencia del motor (W)',
  peakPower: 'Picos de potencia (W)',
  maxGradibility: 'Inclinación (°)',
  maxSpeed: 'Velocidad tope (Km/h)',
  battery: 'Capacidad de la batería (mAh)',
  batteryOutput: 'Salida de la batería (Wh)',
  range: 'Autonomía (Km)',
  voltage: 'Voltaje (v)',

  diameter: 'Diámetro (pulg)',
  width: 'Ancho del neumático (pulg)',
  groundClearance: 'Distancia al suelo (mm)',
  weight: 'Peso (Kg)',
  trolleyHandle: 'Trolley',
  antiSpin: 'Anti giro',
  kickstand: 'Punto de apoyo',
  headlight: 'Luces delanteras (lm)',
  tailLight: 'Luces traseras',
  leds: 'LEDs',
  sound: 'Equipo de sonido (ch)',
  display: 'Pantalla',
  suspension: 'Suspensión',
  color: 'Color'
};

export const wheelFeatureFormatters: WheelFeatureFormatters = {
  price: formatters.currency,

  ratedPower: formatters.power,
  peakPower: formatters.power,
  maxGradibility: formatters.degrees,
  maxSpeed: formatters.speed,
  battery: formatters.capacity,
  batteryOutput: formatters.energy,
  range: formatters.distance,
  voltage: formatters.voltage,

  diameter: formatters.diameter,
  width: formatters.diameter,
  groundClearance: formatters.groundClearance,
  weight: formatters.weight,
  trolleyHandle: formatters.trolleyHandle,
  antiSpin: formatters.antiSpin,
  kickstand: formatters.kickstand,
  headlight: formatters.lumens,
  tailLight: formatters.lumens,
  leds: formatters.boolean,
  sound: formatters.soundChannels,
  display: formatters.display,
  suspension: formatters.suspension,
  color: formatters.color
};

export const trolleyHandleWeight: TrolleyHandleWeight = {
  scorpion: 2,
  telescopic: 1
};

export const antiSpinWeight: AntiSpinWeight = {
  sensor: 3,
  button: 2,
  position: 1
};

export const kickstandWeight: KickstandWeight = {
  dedicated: 2,
  shell: 1
};

export const soundSystemWeight: SoundSystemWeight = {
  '5.1': 4,
  '4.0': 3,
  '2.1': 2,
  '2.0': 1
};

export const displayWeight: DisplayWeight = {
  lcd: 2,
  led: 1
};

export const suspensionWeight: SuspensionWeight = {
  oil: 2,
  air: 1
};