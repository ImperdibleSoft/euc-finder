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
    // eslint-disable-next-line no-console
    console.log('cheapPriceElement', cheapPriceElement);
    // eslint-disable-next-line no-console
    console.log('expensivePriceElement', expensivePriceElement);

    /** Expensive version price */
    if (showExpensive && expensivePriceElement) {
      const expensiveString = expensivePriceElement?.innerHTML?.replace(',', '');
      // eslint-disable-next-line no-console
      console.log('expensiveString', expensiveString);
      // eslint-disable-next-line no-console
      console.log('expensiveString?.match(priceRegExp)', expensiveString?.match(priceRegExp));
      const [rawExpensive] = expensiveString?.match(priceRegExp) ?? [];
      // eslint-disable-next-line no-console
      console.log('rawExpensive', rawExpensive);
      const expensiveVersionPrice = rawExpensive.replace('$', '');
      // eslint-disable-next-line no-console
      console.log('expensiveVersionPrice', expensiveVersionPrice);
      if (expensiveVersionPrice) {
        return Number(expensiveVersionPrice);
      }
    }

    /** Regular version price */
    if (cheapPriceElement) {
      const cheapString = cheapPriceElement?.innerHTML?.replace(',', '');
      // eslint-disable-next-line no-console
      console.log('cheapString', cheapString);
      // eslint-disable-next-line no-console
      console.log('cheapString?.match(priceRegExp)', cheapString?.match(priceRegExp));
      const [rawCheap] = cheapString?.match(priceRegExp) ?? [];
      // eslint-disable-next-line no-console
      console.log('rawCheap', rawCheap);
      const cheapVersionPrice = rawCheap.replace('$', '');
      // eslint-disable-next-line no-console
      console.log('cheapVersionPrice', cheapVersionPrice);
      if (cheapVersionPrice) {
        return Number(cheapVersionPrice);
      }
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
};