import { JSDOM } from 'jsdom';
import { getConvertedPounds } from '..';

const poundsIncRegExp = /\£([0-9]{3,}(\.[0-9]{2,2})? Inc)/g;
const euroIncRegExp = /\€([0-9]{3,}(\.[0-9]{2,2})? Inc)/g;
const poundsRexExp = /\£([0-9]{3,}(\.[0-9]{2,2})?)/g;
const euroRegExp = /\€([0-9]{3,}(\.[0-9]{2,2})?)/g;

const priceRegExp = /([0-9]{3,}(\.[0-9]{2,2})?)/g;

const convertCurrencyToNumber = (currency: string) => {
  const isPounds = poundsIncRegExp.test(currency) || poundsRexExp.test(currency);

  const [optionRawPrice] = currency?.match(poundsIncRegExp)
    ?? currency?.match(euroIncRegExp)
    ?? currency?.match(poundsRexExp)
    ?? currency?.match(euroRegExp)
    ?? [];
    
  // eslint-disable-next-line no-console
  console.log('currency', currency);

  const optPrice = optionRawPrice
    .replace('£', '')
    .replace('€', '')
    .replace('Inc', '')
    .trim();
    
  // eslint-disable-next-line no-console
  console.log('optPrice', optPrice);

  if (optPrice) {
    const num = Number(optPrice);
    return isPounds ? getConvertedPounds(num) : num;
  }

  return undefined;
};

export const parseERidesPrice = (html: string, showExpensive: boolean): number | '-' | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */

    /** Final price when released */
    // eslint-disable-next-line max-len
    const finalPriceElems = Array.from(document.querySelectorAll('.summary .woocommerce-product-details__short-description > *')) ?? [];
    if (finalPriceElems.length) {
      const finalPriceStringOptions = finalPriceElems.reduce((acc, curr) => {
        const string = curr?.innerHTML?.replace(/\,/g, '');

        const rawFinalPriceOptions = string?.match(poundsIncRegExp)
          ?? string?.match(euroIncRegExp)
          ?? string?.match(poundsRexExp)
          ?? string?.match(euroRegExp)
          ?? [];
        
        if (rawFinalPriceOptions.length) {
          acc.push(...rawFinalPriceOptions);
        }

        return acc;
      }, [] as string[]);

      if (finalPriceStringOptions.length) {
        const finalPriceNumberOptions = finalPriceStringOptions
          .map(opt => convertCurrencyToNumber(opt))
          .filter(opt => !!opt)
          .sort((a = 0, b = 0) => b - a);

        // eslint-disable-next-line no-console
        console.log('finalPriceNumberOptions', finalPriceNumberOptions);

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