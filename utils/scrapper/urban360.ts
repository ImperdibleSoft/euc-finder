import { JSDOM } from 'jsdom';

const priceRegExp = /([0-9]{3,},[0-9]{2,2})/;

export const parseUrban360Price = (html: string, showExpensive: boolean): number | '-' | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;


    /** Sold out. Out of stock */
    const soldOutElement = document.querySelector('.stock.out-of-stock');
    if (!!soldOutElement) {
      return '-';
    }

    /** Final price when released */
    
    /** Sale price */
    const salePriceElem = document.querySelector('.summary .price > del+ins > .amount');
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