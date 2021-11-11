import { JSDOM } from 'jsdom';
import { getConvertedCAD } from '../conversions';

const priceRegExp = /\$([0-9]{3,}(\.[0-9]{2,2})?)/g;

export const parseEeveesPrice = (html: string): number | '-' | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */

    /** Final price when released */

    /** Sale price */
    
    /** Expensive version price */

    /** Regular version price */
    // eslint-disable-next-line max-len
    const cheapPriceElement = document.querySelector('.product-single__meta .product-single__meta-list .product-single__price');
    if (cheapPriceElement) {
      const cheapString = cheapPriceElement?.innerHTML?.replace(',', '');
      const [rawCheap] = cheapString?.match(priceRegExp) ?? [];
      const cheapVersionPrice = rawCheap?.replace(',', '.').replace('$', '');
      if (cheapVersionPrice) {
        return getConvertedCAD(Number(cheapVersionPrice));
      }
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
};