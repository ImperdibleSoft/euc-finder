import { config } from './config';
import { data } from './data';
import { wheel } from './wheel';

/**
 * An API client that will help the client app to comunicate
 * with EUC Finder's api.
 * 
 * Since the app is readonly (at the moment), this APIs will
 * always return needed information to render any page SSR-like
 */
const eucFinderApi = {
  /**
   * Any request related to the app's config.
   * This request NEEDs to be executed before app inits.
   */
  config,
  /**
   * Any request related to app's data.
   */
  data,
  /**
   * Any request related to a particular wheel.
   */
  wheel
};

export default eucFinderApi;