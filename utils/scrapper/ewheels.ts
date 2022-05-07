import { JSDOM } from 'jsdom';

const currencyRegExp = /\$([0-9]{3,}(\.[0-9]{2,2})?)/g;
const priceRegExp = /([0-9]{3,}(\.[0-9]{2,2})?)/g;

export const parseEWheelsPrice = (html: string, showExpensive: boolean): number | '-' | undefined => {
  try {
    const dom = new JSDOM(html);
    const { document } = dom.window;

    /** Sold out. Out of stock */
    // eslint-disable-next-line max-len
    const soldOutElements = Array.from(document.querySelectorAll('.entry-summary .summary-container .woocommerce-product-details__short-description > ul > li'));
    if (
      soldOutElements.some(element => element.innerHTML.toLowerCase().includes('out of stock'))
      || soldOutElements.some(element => element.innerHTML.toLowerCase().includes('next eta'))
    ) {
      return '-';
    }

    /** Final price when released */
    const regularPriceElems = Array.from(document.querySelectorAll('.summary .summary-container .price .amount'));
    // eslint-disable-next-line max-len
    const descriptionPriceElems = Array.from(document.querySelectorAll('.summary .summary-container .woocommerce-product-details__short-description span'));

    const finalPriceElems = [...regularPriceElems, ...descriptionPriceElems] ?? [];
    if (finalPriceElems.length) {
      const finalPriceStringOptions = finalPriceElems.reduce((acc, curr, index) => {
        const isRegularPrice = index < regularPriceElems.length;

        const string = curr?.innerHTML?.replace(/\,/g, '');
        const rawFinalPriceOptions = string?.match(isRegularPrice ? priceRegExp : currencyRegExp) ?? [];
        
        if (rawFinalPriceOptions.length) {
          acc.push(...rawFinalPriceOptions.map(price => isRegularPrice ? `$${ price }` : price));
        }

        return acc;
      }, [] as string[]);

      if (finalPriceStringOptions.length) {
        const finalPriceNumberOptions = finalPriceStringOptions
          .map(opt => {
            const [optionRawPrice] = opt.match(currencyRegExp) ?? [];
            const optPrice = optionRawPrice.replace('$', '');

            if (optPrice) {
              return Number(optPrice);
            }

            return undefined;
          })
          .filter(opt => !!opt)
          .sort((a = 0, b = 0) => b - a);

        return finalPriceNumberOptions[showExpensive ? 0 : 1] ?? finalPriceNumberOptions[0];
      }
    }

    /** Sale price */
    const [cheapPriceElement, expensivePriceElement] = regularPriceElems ?? [];

    /** Expensive version price */
    if (showExpensive && expensivePriceElement) {
      const expensiveString = expensivePriceElement?.innerHTML?.replace(',', '');
      const [rawExpensive] = expensiveString?.match(priceRegExp) ?? [];
      const expensiveVersionPrice = rawExpensive.replace('$', '');
      if (expensiveVersionPrice) {
        return Number(expensiveVersionPrice);
      }
    }

    /** Regular version price */
    if (cheapPriceElement) {
      const cheapString = cheapPriceElement?.innerHTML?.replace(',', '');
      const [rawCheap] = cheapString?.match(priceRegExp) ?? [];
      const cheapVersionPrice = rawCheap.replace('$', '');
      if (cheapVersionPrice) {
        return Number(cheapVersionPrice);
      }
    }

    return undefined;
  } catch (error) {
    return undefined;
  }
};
