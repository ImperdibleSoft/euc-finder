import { JSDOM } from 'jsdom';

const priceRegExp = /([0-9]{3,},[0-9]{2,2})/;

export const parseInmotionFrancePrice = (html: string): number | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */

    /** Final price when released */

    /** Sale price */
    
    /** Expensive version price */
  
    /** Regular price */
    const [
      cheapPriceElement
    ] = Array.from(document.querySelectorAll('.product-price .current-price')) ?? [];
    if (cheapPriceElement) {
      const cheapString = cheapPriceElement?.innerHTML?.replace('.', '');
      const [, rawCheap] = cheapString?.match(priceRegExp) ?? [];
      const cheap = rawCheap?.replace(',', '.');
      if (cheap) {
        return Number(cheap);
      }
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
};