import { RootState } from '../types';

export const getRangeConfig = ({ config }: RootState) =>
  config.calculatedRange;

export const getPaginationConfig = ({ config }: RootState) =>
  config.paginationSize;

export const getPricesConfig = ({ config }: RootState) =>
  config.prices;

export const getPurchaseLinksConfig = ({ config }: RootState) =>
  config.purchaseLinks;

export const getTableViewSpecs = ({ config }: RootState) =>
  config.specColumns;

export const getListViewSpecs = ({ config }: RootState) =>
  [config.listMainSpecs, config.listAdditionalSpecs];

export const getDetailViewSpecs = ({ config }: RootState) =>
  [config.detailHighlightedSpecs, config.detailMainSpecs, config.detailAdditionalSpecs];