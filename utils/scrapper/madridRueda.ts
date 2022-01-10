import { JSDOM } from 'jsdom';

const priceRegExp = /([0-9]{3,}(,[0-9]{2,2})?)/;

export const parseMadridRuedaPrice = (html: string): number | '-' | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */
    // eslint-disable-next-line max-len
    const reservationElement = document.querySelector('.product-container .page-content ul.product-flags > .product-flag.new');
    const soldOutElement = document.querySelector('#product-availability');
    if (
      // eslint-disable-next-line max-len
      soldOutElement?.innerHTML?.includes('Debido a la escasez de componentes y celdas para las baterías el stock no es estable')
      || soldOutElement?.innerHTML?.includes('Producto bajo pedido')
      || (soldOutElement?.innerHTML?.includes('Sin stock') && !reservationElement)
    ) {
      return '-';
    }

    /** Final price when released */

    /** Sale price */
    const salePriceElem = document.querySelector('.product-price.has-discount > .current-price > span:first-child');
    if (salePriceElem) {
      const salePriceString = salePriceElem?.innerHTML?.replace('.', '');
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
      const regularString = regularPriceElem?.innerHTML?.replace('.', '');
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