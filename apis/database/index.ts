import { apps } from './apps';
import { brands } from './brands';
import { config } from './config';
import { dealers } from './dealers';
import { influencers } from './influencers';
import { purchaseLinks } from './purchaseLinks';
import { videos } from './videos';
import { wheels } from './wheels';

/**
 * Abstracted client for future DDBB used
 * to store information.
 * 
 * At the moment, they are async methods
 * returning hardcoded data
 */
const databaseApi = {
  /**
   * All available operations related to `App` entity
   */
  apps,
  
  /**
   * All available operations related to `Brand` entity
   */
  brands,

  /**
   * All available operations related to the config
   */
  config,
  
  /**
   * All available operations related to `Store` entity
   */
  dealers,
  
  /**
   * All available operations related to `Influencer` entity
   */
  influencers,
  
  /**
   * All available operations related to `PurchaseLinks` entity
   */
  purchaseLinks,
  
  /**
   * All available operations related to `Video` entity
   */
  videos,
  
  /**
   * All available operations related to `Wheel` entity
   */
  wheels
};

export default databaseApi;
