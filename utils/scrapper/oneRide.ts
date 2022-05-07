import { JSDOM } from 'jsdom';

const priceRegExp = /([0-9]{3,}(\.[0-9]{2,2})?)/;

export const parseOneRidePrice = (html: string): number | '-' | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */
    // eslint-disable-next-line max-len
    const soldOutElement = document.querySelector('#product-availability');
    const reservationElement = document.querySelector('.product-detail .product-detail-name');
    if (
      (
        soldOutElement?.innerHTML?.toLowerCase().replace(/ /g, '-').includes('expected-in')
        || soldOutElement?.innerHTML?.toLowerCase().replace(/ /g, '-').includes('out-of-stock')
      )
      && !reservationElement?.innerHTML?.toLowerCase().replace(/ /g, '').includes('[preorder]')
    ) {
      return '-';
    }

    /** Final price when released */

    /** Sale price */
    const salePriceElem = document.querySelector('.product-price.has-discount > .current-price > span:first-child');    
    if (salePriceElem) {
      const salePriceString = salePriceElem?.innerHTML?.replace(',', '');
      const [, rawSalePrice] = salePriceString?.match(priceRegExp) ?? [];
      const salePrice = rawSalePrice?.replace(',', '.');
      if (salePrice) {
        return Number(salePrice);
      }
    }
  
    /** Expensive version price */

    /** Regular version price */
    const regularPriceElem = document.querySelector('.product-price > .current-price > span:first-child');
    if (regularPriceElem) {
      const regularString = regularPriceElem?.innerHTML?.replace(',', '');
      const [, rawRegular] = regularString?.match(priceRegExp) ?? [];
      const regularVersionPrice = rawRegular?.replace(',', '.');
      if (regularVersionPrice) {
        return Number(regularVersionPrice);
      }
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
};
