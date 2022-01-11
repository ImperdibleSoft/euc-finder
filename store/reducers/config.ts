import { LOCAL_STORAGE_KEY } from '../../types';
import { getItem } from '../../utils';
import { getConfigInitialState } from '../models';
import { ConfigActions, ConfigState } from '../types';

const reducer = (state = getConfigInitialState(), action: ConfigActions): ConfigState => {
  switch (action.type) {
    case 'SET_CONFIG':
      const localHardcodedRange = getItem(LOCAL_STORAGE_KEY.DISABLE_CALCULATEDRANGE);
      const localPrices = getItem(LOCAL_STORAGE_KEY.ENABLE_PRICE);
      const localPurchaseLinks = getItem(LOCAL_STORAGE_KEY.ENABLE_PURCHASELINKS);

      return {
        ...state,
        ...action.payload.config,
        featureFlags: {
          ...state.featureFlags,
          calculatedRange: localHardcodedRange
            ? localHardcodedRange !== 'true'
            : action.payload.config.featureFlags.calculatedRange,
          prices: localPrices
            ? localPrices === 'true'
            : action.payload.config.featureFlags.prices,
          purchaseLinks: localPurchaseLinks
            ? localPurchaseLinks === 'true'
            : action.payload.config.featureFlags.purchaseLinks
        }
      };

    default:
      return state;
  }
};

export default reducer;
