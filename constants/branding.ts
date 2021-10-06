const {
  displayName = 'EUC Finder',
  description = 'Find the best EUC for you!',
  version = '0.0.1',
  repository
} = require('../package.json');

export const APP_NAME = displayName;
export const APP_DESCRIPTION = description;

export const APP_VERSION = version;
export const APP_REPO = repository;
export const CURRENT_YEAR = new Date(Date.now()).getFullYear();

export const KEYWORDS = [
  'Electric',
  'Personal',
  'Transport',
  'Unicycle',
  'Vehicles',
  'EUC',
  'Eléctrico',
  'Transporte',
  'Monociclos',
  'Vehículos'
];