import { RootState } from '../types';

export const getRangeConfig = ({ config }: RootState) =>
  config.calculatedRange;

export const getPaginationConfig = ({ config }: RootState) =>
  config.paginationSize;

export const getPricesConfig = ({ config }: RootState) =>
  config.prices;

export const getPurchaseLinksConfig = ({ config }: RootState) =>
  config.purchaseLinks;

export const getTableViewSpecs = ({ config }: RootState) => {
  if (!config.prices) {
    return config.specColumns.filter(k => k !== 'price');
  }

  return config.specColumns;
};

export const getListViewSpecs = ({ config }: RootState) => {
  if (!config.prices) {
    return [
      config.listMainSpecs.filter(k => k !== 'price'),
      config.listAdditionalSpecs.filter(k => k !== 'price')
    ];
  }
  
  return [config.listMainSpecs, config.listAdditionalSpecs];
};

export const getDetailViewSpecs = ({ config }: RootState) => {
  if (!config.prices) {
    return [
      config.detailHighlightedSpecs.filter(k => k !== 'price'),
      config.detailMainSpecs.filter(k => k !== 'price'),
      config.detailAdditionalSpecs.filter(k => k !== 'price')
    ];
  }
  
  return [config.detailHighlightedSpecs, config.detailMainSpecs, config.detailAdditionalSpecs];
};