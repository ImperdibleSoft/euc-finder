import { JSDOM } from 'jsdom';

const priceRegExp = /([0-9]{1,}(,[0-9]{2,2})?)/;

export const parseCiclonicPrice = (html: string, showExpensive: boolean): number | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */

    /** Final price when released */
    const [
      finalPriceElement
    // eslint-disable-next-line max-len
    ] = Array.from(document.querySelectorAll('.et_pb_row_0_tb_body .et_pb_wc_description .et_pb_module_inner p strong')) ?? [];
    if (finalPriceElement) {
      const [, rawFinalPrice] = finalPriceElement?.innerHTML?.replace(',', '').match(priceRegExp) ?? [];
      if (rawFinalPrice) {
        return Number(rawFinalPrice);
      }
    }

    /** Sale price */
    const salePriceElem = document.querySelector('.et_pb_wc_price .price > del+ins > .amount');
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
    ] = Array.from(document.querySelectorAll('.et_pb_wc_price .price .amount')) ?? [];

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