import { LOCAL_STORAGE_KEY } from '../../types';
import { getItem } from '../../utils';
import { getConfigInitialState } from '../models';
import { ConfigActions, ConfigState } from '../types';

const reducer = (state = getConfigInitialState(), action: ConfigActions): ConfigState => {
  switch (action.type) {
    case 'SET_CONFIG_INITIALDATA':
      const localPrices = getItem(LOCAL_STORAGE_KEY.ENABLE_PRICE);
      const localPurchaseLinks = getItem(LOCAL_STORAGE_KEY.ENABLE_PURCHASELINKS);

      return {
        ...state,
        ...action.payload,
        prices: localPrices ? localPrices === 'true' : action.payload.prices,
        purchaseLinks: localPurchaseLinks ? localPurchaseLinks === 'true' : action.payload.purchaseLinks
      };

    default:
      return state;
  }
};

export default reducer;
