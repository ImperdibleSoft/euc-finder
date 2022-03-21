
import { PedalSurface, PedalType } from '../../../../../types';

interface Pedals {
  pedals: [PedalType | undefined, PedalSurface | undefined, boolean | undefined];
  pedalSize: [number | undefined, number | undefined];
}

// Begode

export const begodePlainS: Pedals = {
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  pedalSize: [201, 114]
};

export const begodePlainM: Pedals = {
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  pedalSize: [231, 114]
};

export const begodePlainL: Pedals = {
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  pedalSize: [287, 133]
};

export const begodeHoneycomb: Pedals = {
  pedals: [PedalType.honeycomb, PedalSurface.metalic, true],
  pedalSize: [288, 133]
};

// Recio

export const recioPedals: Pedals = {
  pedals:[PedalType.honeycomb, PedalSurface.metalic, true],
  pedalSize: [265, 135] 
};

// Inmotion

export const inmotionPlainS: Pedals = {
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  pedalSize: [undefined, undefined]
};

export const inmotionPlainM: Pedals = {
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  pedalSize: [undefined, undefined]
};

export const inmotionPlainL: Pedals = {
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  pedalSize: [243, 129]
};

// Kingsong

export const kingsongPlainS: Pedals = {
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  pedalSize: [undefined, undefined]
};

export const kingsongPlainM: Pedals = {
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  pedalSize: [undefined, undefined]
};

export const kingsongPlainL: Pedals = {
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  pedalSize: [240, undefined]
};

export const kingsongPlainXL: Pedals = {
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  pedalSize: [250, undefined]
};

export const kingsongS18Pedals: Pedals = {
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  pedalSize: [undefined, undefined]
};

export const kingsongHoneycomb: Pedals = {
  pedals: [PedalType.honeycomb, PedalSurface.metalic, true],
  pedalSize: [277, 130]
};

// Veteran

export const veteranPlainM: Pedals = {
  pedals: [PedalType.plain, PedalSurface.fullGripTape, false],
  pedalSize: [250, 130]
};

export const veteranMetalicL: Pedals = {
  pedals: [PedalType.plain, PedalSurface.metalic, true],
  pedalSize: [265, 145]
};
