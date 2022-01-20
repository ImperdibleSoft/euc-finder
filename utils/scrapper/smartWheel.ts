import { JSDOM } from 'jsdom';
import { convertCADsToUSDs } from '../conversions';

const priceRegExp = /\$([0-9]{3,}(\.[0-9]{2,2})?)/g;

export const parseSmartWheelPrice = (html: string): number | '-' | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */
    const soldOutElem = document.querySelector('.form--addToCart .alertBox.alertBox--error .alertBox-message');
    if (soldOutElem) {
      return '-';
    }

    /** Final price when released */

    /** Sale price */
    
    /** Expensive version price */

    /** Regular version price */
    // eslint-disable-next-line max-len
    const cheapPriceElement = document.querySelector('.productView-details .productView-price .price-section .price.price--main');
    if (cheapPriceElement) {
      const cheapString = cheapPriceElement?.innerHTML?.replace(',', '');
      const [rawCheap] = cheapString?.match(priceRegExp) ?? [];
      const cheapVersionPrice = rawCheap?.replace(',', '.').replace('$', '');
      if (cheapVersionPrice) {
        return convertCADsToUSDs(Number(cheapVersionPrice));
      }
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
};
