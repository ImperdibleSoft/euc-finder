const CAD_TO_USD = 0.80;
export const convertCADsToUSDs = (canadianDolars: number) => canadianDolars * CAD_TO_USD;
export const convertUSDsToCADs = (canadianDolars: number) => canadianDolars / CAD_TO_USD;

const POUND_TO_EURO = 1.20;
export const convertPoundsToEuros = (pounds: number) => pounds * POUND_TO_EURO;
export const convertEurosToPounds = (pounds: number) => pounds / POUND_TO_EURO;
 
const USD_TO_EURO = 0.88;
export const convertUSDsToEuros = (usds: number) => usds * USD_TO_EURO;
export const convertEurosToUSDs = (euros: number) => euros / USD_TO_EURO;
 