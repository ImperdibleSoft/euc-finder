const IN_TO_CM = 2.54;
export const inchesToCentimeters = (inches: number) => inches * IN_TO_CM;
export const centimetersToInches = (cm: number) => cm / IN_TO_CM;

export const inchesToMilimeters = (inches: number) => inchesToCentimeters(inches) * 10;
export const milimetersToInches = (mm: number) => centimetersToInches(mm / 10);

const KM_TO_MI = 0.621371;
export const kilometersToMiles = (km: number) => km * KM_TO_MI;
export const milesToKilometers = (mi: number) => mi / KM_TO_MI;

const KG_TO_LB = 2.20462;
export const kilogramsToPounds = (kg: number) => kg * KG_TO_LB;
export const poundsToKilograms = (lb: number) => lb / KG_TO_LB;
