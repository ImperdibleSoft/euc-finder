import { getItem, removeItem, setItem } from '.';
import { LOCAL_STORAGE_KEY } from '../types';

export enum OLD_LOCAL_STORAGE_KEY {
  // Generics
  INITIAL_DISCLAIMER = 'rangeDisclaimer',
  REGION = 'preference_region',

  // Videos
  VIDEO_LASTVISIT = 'lastVisit',

  // Settings: Measure units
  MEASUREUNIT_DIAMETER = 'preference_diameter',
  MEASUREUNIT_GROUNDCLEARANCE = 'preference_groundClearance',
  MEASUREUNIT_MAXSPEED = 'preference_maxSpeed',
  MEASUREUNIT_RANGE = 'preference_range',
  MEASUREUNIT_WEIGHT = 'preference_weight',
  MEASUREUNIT_WIDTH = 'preference_width',

  // Feature flags
  ENABLE_PRICE = 'showPrice',
  ENABLE_PURCHASELINKS = 'showPurchaseLinks',
  SHOW_THEME = 'theme',
  DISABLE_ANALYTICS = 'test',
}

export const migrateOldPreferences = () => {
  let hasFoundAnyOldItem = false;

  Object.keys(OLD_LOCAL_STORAGE_KEY).forEach(key => {
    // eslint-disable-next-line no-restricted-syntax
    if (key in LOCAL_STORAGE_KEY) {
      // @ts-ignore
      const oldStorageKey = OLD_LOCAL_STORAGE_KEY[key];
      // @ts-ignore
      const newStorageKey = LOCAL_STORAGE_KEY[key];

      // Get stored value for the old key
      const value = getItem(oldStorageKey);

      if (value) {
        // eslint-disable-next-line no-restricted-syntax, no-console
        console.log(`Found ${ key } element. Migrating it!`);
    
        hasFoundAnyOldItem = true;

        // Save in the new key
        setItem(newStorageKey, value);
        
        // Remove the old key
        removeItem(oldStorageKey);
      }
    }
  });

  return hasFoundAnyOldItem;
};
