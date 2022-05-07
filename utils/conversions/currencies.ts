const CAD_TO_USD = 0.78;
export const convertCADsToUSDs = (canadianDolars: number) => canadianDolars * CAD_TO_USD;
export const convertUSDsToCADs = (canadianDolars: number) => canadianDolars / CAD_TO_USD;

const POUND_TO_EURO = 1.17;
export const convertPoundsToEuros = (pounds: number) => pounds * POUND_TO_EURO;
export const convertEurosToPounds = (pounds: number) => pounds / POUND_TO_EURO;
 
const USD_TO_EURO = 0.95;
export const convertUSDsToEuros = (usds: number) => usds * USD_TO_EURO;
export const convertEurosToUSDs = (euros: number) => euros / USD_TO_EURO;
 