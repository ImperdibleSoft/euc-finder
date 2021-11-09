import { JSDOM } from 'jsdom';

const priceRegExp = /([0-9]{1,}) ?Euro/;

export const parseEucSalePrice = (html: string, showExpensive: boolean): number | '-' | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */
    const soldOutElem = document.querySelector('.product-info-delivery-info');
    if (soldOutElem) {
      const str = soldOutElem.innerHTML?.trim().toLowerCase();
      if (/out of stock/.test(str)) {
        return '-';
      }
    }
    

    /** Final price when released */

    /** Sale price */
  
    const [
      cheapPriceElement,
      expensivePriceElement
    ] = Array.from(document.querySelectorAll('.product-info-delivery-info')) ?? [];

    /** Expensive version price */
    if (showExpensive && expensivePriceElement) {
      const expensiveString = expensivePriceElement?.innerHTML?.replace('.', '');
      const [, rawExpensive] = expensiveString?.match(priceRegExp) ?? [];
      const expensiveVersionPrice = rawExpensive?.replace(',', '.');
      if (expensiveVersionPrice) {
        return Number(expensiveVersionPrice);
      }
    }

    /** Regular version price */
    if (cheapPriceElement) {
      const cheapString = cheapPriceElement?.innerHTML;
      const [, rawCheap] = cheapString?.match(priceRegExp) ?? [];
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