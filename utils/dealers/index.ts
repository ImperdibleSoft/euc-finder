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
  let parsed = (str ?? '')
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

export const parseMarkdown = (str: string) => {
  const [, , europe = '', america = ''] = str.split('# ');

  const regions = [europe, america];

  const parsedRegions = regions.map(region => {
    const [regionName] = region.split('\n');
    const [, ...dealers] = region.replace(/#/g, '').split('\n- ');

    const parsedDealers = dealers.map(dealer => {

      const [
        dealerName,
        storeInformation,
        purchaseLinks,
        fetchPrices,
        negotiations,
        discountCode
      ] = dealer.split('\r\n  ');

      return {
        dealerName: cleanString(dealerName, { removeLetters: false, removeSpaces: false }),
        storeInformation: cleanString(storeInformation),
        purchaseLinks: cleanString(purchaseLinks),
        fetchPrices: cleanString(fetchPrices),
        negotiations: cleanString(negotiations),
        discountCode: cleanString(discountCode)
      };
    });

    return {
      name: cleanString(regionName, { removeLetters: false }),
      dealers: parsedDealers
    };
  });

  return parsedRegions;
};