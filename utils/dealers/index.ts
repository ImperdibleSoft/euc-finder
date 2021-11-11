// @ts-ignore
import dealersMarkdown from '../../docs/dealers.md';
import { sortBy } from '../collections';

interface Options {
  removeSpaces?: boolean;
  removeLetters?: boolean;
  removeComments?: boolean;
}

const cleanString = (
  str: string,
  {
    removeComments = true,
    removeLetters = true,
    removeSpaces = true
  }: Options = {}
) => {
  let parsed = str
    .replace(/\n/g, '')
    .replace(/\r/g, '')
    .replace(/\-/g, '');
    
  if (removeSpaces) {
    parsed = parsed.replace(/ /g, '');
  }

  if (removeLetters) {
    parsed = parsed.replace(/[a-zA-Z0-9]/g, '');
  }

  if (removeComments) {
    parsed = parsed.replace(/, .*/, '');
  }

  return parsed;
};

export const getDealersFromMarkdown = () => {
  const [, , europe = '', america = ''] = (dealersMarkdown as string).split('# ');

  const regions = [europe, america];

  const parsedRegions = regions.map(region => {
    const [regionName] = region.split('\n');
    const [, ...dealers] = region.replace(/#/g, '').split('\n- ');

    const parsedDealers = dealers.map(dealer => {
      const [
        dealerName = '',
        storeInformation = '',
        purchaseLinks = '',
        fetchPrices = '',
        negotiations = '',
        discountCode = ''
      ] = dealer.split('\n') as (string | undefined)[];

      return {
        dealerName: cleanString(dealerName, { removeLetters: false, removeSpaces: false }),
        storeInformation: cleanString(storeInformation),
        purchaseLinks: cleanString(purchaseLinks),
        fetchPrices: cleanString(fetchPrices),
        negotiations: cleanString(negotiations),
        discountCode: cleanString(discountCode)
      };
    }).sort(sortBy('dealerName', 'asc'));

    return {
      name: cleanString(regionName, { removeLetters: false }),
      dealers: parsedDealers
    };
  });

  return parsedRegions;
};

export const isDealerAvailable = (rawDealerName: string): boolean => {
  const [europe, america] = getDealersFromMarkdown();
  const dealers = [...europe.dealers, ...america.dealers];

  const dealerName = cleanString(rawDealerName.toLowerCase(), { removeLetters: false });
  const dealer = dealers.find(d => {
    const name = cleanString(d.dealerName.toLowerCase(), { removeLetters: false });
    return name === dealerName;
  });
  
  if (!dealer) {
    return false;
  }

  const { discountCode, storeInformation, purchaseLinks, fetchPrices } = dealer;
  const available = (
    (discountCode === '✔️' || discountCode === '❌') &&
    storeInformation === '✔️' &&
    purchaseLinks === '✔️' &&
    fetchPrices === '✔️'
  );

  // Hardcode this in order to help them, because of the fire
  return available || dealer.dealerName === 'eWheels';
};