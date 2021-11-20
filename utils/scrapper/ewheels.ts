import { JSDOM } from 'jsdom';

const currencyRegExp = /\$([0-9]{3,}(\.[0-9]{2,2})?)/g;
const priceRegExp = /([0-9]{3,}(\.[0-9]{2,2})?)/g;

export const parseEWheelsPrice = (html: string, showExpensive: boolean): number | '-' | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */

    /** Final price when released */
    // eslint-disable-next-line max-len
    const finalPriceElems = Array.from(document.querySelectorAll('.summary .summary-container .woocommerce-product-details__short-description span')) ?? [];

    if (finalPriceElems.length) {
      const finalPriceStringOptions = finalPriceElems.reduce((acc, curr) => {
        const string = curr?.innerHTML?.replace(/\,/g, '');
        const rawFinalPriceOptions = string?.match(currencyRegExp) ?? [];
        
        if (rawFinalPriceOptions.length) {
          acc.push(...rawFinalPriceOptions);
        }

        return acc;
      }, [] as string[]);

      if (finalPriceStringOptions.length) {
        const finalPriceNumberOptions = finalPriceStringOptions
          .map(opt => {
            const [optionRawPrice] = opt.match(currencyRegExp) ?? [];
            const optPrice = optionRawPrice.replace('$', '');

            if (optPrice) {
              return Number(optPrice);
            }

            return undefined;
          })
          .filter(opt => !!opt)
          .sort((a = 0, b = 0) => b - a);

        return finalPriceNumberOptions[0];
      }
    }

    /** Sale price */
    
    const [
      cheapPriceElement,
      expensivePriceElement
    ] = Array.from(document.querySelectorAll('.summary .price .amount')) ?? [];

    /** Expensive version price */
    if (showExpensive && expensivePriceElement) {
      const expensiveString = expensivePriceElement?.innerHTML?.replace(',', '');
      const [rawExpensive] = expensiveString?.match(priceRegExp) ?? [];
      const expensiveVersionPrice = rawExpensive.replace('$', '');
      if (expensiveVersionPrice) {
        return Number(expensiveVersionPrice);
      }
    }

    /** Regular version price */
    if (cheapPriceElement) {
      const cheapString = cheapPriceElement?.innerHTML?.replace(',', '');
      const [rawCheap] = cheapString?.match(priceRegExp) ?? [];
      const cheapVersionPrice = rawCheap.replace('$', '');
      if (cheapVersionPrice) {
        return Number(cheapVersionPrice);
      }
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
};