import { JSDOM } from 'jsdom';

const currencyRegExp = /([0-9]{3,}(,[0-9]{2,2})?) euros/;
const priceRegExp = /([0-9]{3,}(,[0-9]{2,2})?)/;

export const parseCiclonicPrice = (html: string, showExpensive: boolean): number | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */

    /** Final price when released */
    // eslint-disable-next-line max-len
    const descriptionElements = Array.from(document.querySelectorAll('.entry-summary .woocommerce-product-details__short-description > *')) ?? [];
    const finalPriceElement = descriptionElements.find(elem => currencyRegExp.test(elem.innerHTML.replace(',', '')));
    if (finalPriceElement) {
      const [, rawFinalPrice] = finalPriceElement?.innerHTML?.replace(',', '').match(priceRegExp) ?? [];
      if (rawFinalPrice) {
        return Number(rawFinalPrice);
      }
    }

    /** Sale price */
    const salePriceElem = document.querySelector('.entry-summary .price > del+ins > .amount');
    if (salePriceElem) {
      const salePriceString = salePriceElem?.innerHTML?.replace('.', '');
      const [, rawSalePrice] = salePriceString?.match(priceRegExp) ?? [];
      const salePrice = rawSalePrice?.replace(',', '.');
      if (salePrice) {
        return Number(salePrice);
      }
    }
  
    const [
      cheapPriceElement,
      expensivePriceElement
    ] = Array.from(document.querySelectorAll('.entry-summary .price .amount')) ?? [];

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
      const cheapString = cheapPriceElement?.innerHTML?.replace('.', '');
      const [, rawCheap] = cheapString?.match(priceRegExp) ?? [];
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
