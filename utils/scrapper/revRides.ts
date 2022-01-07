import { JSDOM } from 'jsdom';

const priceRegExp = /([0-9]{3,}(\.[0-9]{2,2})?)/g;

export const parseRevRidesPrice = (html: string): number | '-' | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */
    // eslint-disable-next-line max-len
    const soldOutElem = document.querySelector('.purchase-details.smart-payment-button--false button.action_button--secondary.disabled');
    if (soldOutElem?.innerHTML.toLowerCase().includes('sold out')) {
      return '-';
    }

    /** Final price when released */
    // eslint-disable-next-line max-len
    const finalPriceElems = Array.from(document.querySelectorAll('.product_section > .columns > .description > div > b')) ?? [];

    if (finalPriceElems.length) {
      const finalPriceStringOptions = finalPriceElems.reduce((acc, curr) => {
        const string = curr?.innerHTML?.replace(/\,/g, '');
        const rawFinalPriceOptions = string?.match(priceRegExp) ?? [];
        
        if (rawFinalPriceOptions.length) {
          acc.push(...rawFinalPriceOptions);
        }

        return acc;
      }, [] as string[]);

      if (finalPriceStringOptions.length) {
        const finalPriceNumberOptions = finalPriceStringOptions
          .map(opt => {
            const [optionRawPrice] = opt.match(priceRegExp) ?? [];
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
    
    /** Expensive version price */

    /** Regular version price */
    const cheapPriceElement = document.querySelector('.current_price > .money');
    if (cheapPriceElement) {
      const cheapString = cheapPriceElement?.innerHTML?.replace(',', '');
      const [rawCheap] = cheapString?.match(priceRegExp) ?? [];
      const cheapVersionPrice = rawCheap?.replace(',', '.');
      if (cheapVersionPrice) {
        return Number(cheapVersionPrice);
      }
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
};