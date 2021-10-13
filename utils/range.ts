export const getEstimatedRealRange = (range: number) => range * 55 / 100;

export const toDecimals = (num: number, decimals = 2) => num.toLocaleString('en-EN', {
  maximumFractionDigits: decimals,
  minimumFractionDigits: decimals
});