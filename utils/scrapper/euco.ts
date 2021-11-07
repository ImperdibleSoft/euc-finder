import { JSDOM } from 'jsdom';

const priceRegExp = /([0-9]{1,}(\.[0-9]{2,2})?)/;

export const parseEucoPrice = (html: string): number | '-' | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */
    // eslint-disable-next-line max-len
    const soldOutElem = document.querySelector('.price--sold-out');
    if (soldOutElem) {
      return '-';
    }

    // /** Final price when released */
    const [
      finalPriceElement
    // eslint-disable-next-line max-len
    ] = Array.from(document.querySelectorAll('.product-single__meta~.metafield-section > p:nth-child(3)')) ?? [];
    if (finalPriceElement) {
      const finalPriceString = finalPriceElement?.innerHTML?.replace(',', '');
      const [, rawFinalPrice] = finalPriceString?.match(priceRegExp) ?? [];
      const finalPrice = rawFinalPrice;
      if (finalPrice) {
        return Number(finalPrice);
      }
    }

    /** Sale price */
    // eslint-disable-next-line max-len
    const salePriceElem = document.querySelector('.price--on-sale > .price__pricing-group > .price__sale .price-item--sale');
    if (salePriceElem) {
      const salePriceString = salePriceElem?.innerHTML?.replace(',', '');
      const [, rawSalePrice] = salePriceString?.match(priceRegExp) ?? [];
      const salePrice = rawSalePrice;
      if (salePrice) {
        return Number(salePrice);
      }
    }

    /** Regular version price */
    const cheapPriceElement = document.querySelector('.price__pricing-group > .price__regular .price-item--regular');
    if (cheapPriceElement) {
      const cheapString = cheapPriceElement?.innerHTML?.replace(',', '');
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