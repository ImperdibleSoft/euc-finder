import { JSDOM } from 'jsdom';

const priceRegExp = /\$([0-9]{3,}(\.[0-9]{2,2})?)/g;

const amountRegExp = /([0-9]{3,}(\.[0-9]{2,2})?)/;

export const parseEucoPrice = (html: string): number | '-' | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */
    const soldOutElem = document.querySelector('.price--sold-out');
    if (soldOutElem) {
      return '-';
    }

    /** Final price when released */
    const [
      finalPriceElement
    // eslint-disable-next-line max-len
    ] = Array.from(document.querySelectorAll('.product-single__meta~.metafield-section > p:nth-child(3)')) ?? [];
    if (finalPriceElement) {
      const finalPriceString = finalPriceElement?.innerHTML?.replace(',', '');
      const [rawFinalPrice] = finalPriceString?.match(priceRegExp) ?? finalPriceString?.match(amountRegExp) ?? [];
      const finalPrice = rawFinalPrice?.replace('$', '');

      if (finalPrice) {
        return Number(finalPrice);
      }
    }

    /** Sale price */
    // eslint-disable-next-line max-len
    const salePriceElem = document.querySelector('.price--on-sale > .price__pricing-group > .price__sale .price-item--sale');
    if (salePriceElem) {
      const salePriceString = salePriceElem?.innerHTML?.replace(',', '');
      const [rawSalePrice] = salePriceString?.match(priceRegExp) ?? salePriceString?.match(amountRegExp) ?? [];
      const salePrice = rawSalePrice?.replace('$', '');

      const isPrePurchase = Number(salePrice) < 500;
      if (salePrice && !isPrePurchase) {
        return Number(salePrice);
      }

      // eslint-disable-next-line max-len
      const regularPriceElem = document.querySelector('.price--on-sale > .price__pricing-group > .price__sale .price-item--regular');
      if (regularPriceElem) {
        const regularPriceString = regularPriceElem?.innerHTML?.replace(',', '');
        const [
          rawRegularPrice
        ] = regularPriceString?.match(priceRegExp) ?? regularPriceString?.match(amountRegExp) ?? [];
        const regularPrice = rawRegularPrice?.replace('$', '');

        if (regularPrice) {
          return Number(regularPrice);
        }
      }
    }
    
    /** Expensive version price */

    /** Regular version price */
    const cheapPriceElement = document.querySelector('.price__pricing-group > .price__regular .price-item--regular');
    if (cheapPriceElement) {
      const cheapString = cheapPriceElement?.innerHTML?.replace(',', '');
      const [rawCheap] = cheapString?.match(priceRegExp) ?? cheapString?.match(amountRegExp) ?? [];
      const cheapVersionPrice = rawCheap?.replace(',', '.')?.replace('$', '');
      
      if (cheapVersionPrice) {
        return Number(cheapVersionPrice);
      }
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
};
