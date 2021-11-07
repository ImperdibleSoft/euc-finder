import { JSDOM } from 'jsdom';

const priceRegExp = /([0-9]{1,}\.[0-9]{2,2})/;

export const parseMyEWheelPrice = (html: string, showExpensive: boolean): number | '-' | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */
    const soldOutElement = document.querySelector('.summary .sorry');
    if (!!soldOutElement) {
      return '-';
    }

    /** Final price when released */
    const finalPriceElement = document.querySelector('.summary .woocommerce-product-details__short-description strong');
    if (finalPriceElement) {
      const [, rawFinalPrice] = finalPriceElement?.innerHTML?.replace(',', '').match(priceRegExp) ?? [];
      if (rawFinalPrice) {
        return Number(rawFinalPrice);
      }
    }

    /** Sale price */
  
    const [
      cheapPriceElement,
      expensivePriceElement
    ] = Array.from(document.querySelectorAll('.summary .price .amount')) ?? [];
    
    /** Expensive version price */
    if (showExpensive && expensivePriceElement) {
      const expensiveString = expensivePriceElement?.innerHTML?.replace('.', '');
      const [, rawExpensive] = expensiveString?.match(priceRegExp) ?? [];
      const expensiveVersionPrice = rawExpensive?.replace(',', '.');
      if (expensiveVersionPrice) {
        return Number(expensiveVersionPrice);
      }
    }
  
    /** Regular price */
    if (cheapPriceElement) {
      const [,rawCheap] = cheapPriceElement?.innerHTML?.replace(',', '').match(priceRegExp) ?? [];
      const cheapVersionPrice = rawCheap;
      if (cheapVersionPrice) {
        return Number(cheapVersionPrice);
      }
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
};