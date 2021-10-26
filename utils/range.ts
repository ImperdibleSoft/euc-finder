export const getEstimatedRealRange = (range: number) => range * 60 / 100;

export const toDecimals = (num: number, decimals = 2, minDecimals?: number) => num.toLocaleString('en-EN', {
  maximumFractionDigits: decimals,
  minimumFractionDigits: minDecimals ?? decimals
});