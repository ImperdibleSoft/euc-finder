export enum LOCAL_STORAGE_KEY {
  // Generics

  /**
   * UI Language
   */
  LANGUAGE = 'i18nextLng',

  /**
   * User has already accepted initial 
   * info disclaimer
   */
  INITIAL_DISCLAIMER = 'eucFinder_initialDisclaimer',

  /**
   * User selected region
   */
  REGION = 'eucFinder_region',
  /**
   * App on Startup
   */
  STARTUP_APP = 'eucFinder_startupApp',
  /**
   * User's weight
   */
  USER_WEIGHT = 'eucFinder_userWeight',

  // Videos

  /**
   * Last time user visited video page
   */
  VIDEO_LASTVISIT = 'eucFinder_videoLastVisit',

  // Settings: Measure units

  /**
   * Store selected measure unit for Diameter
   */
  MEASUREUNIT_DIAMETER = 'eucFinder_diameterMeasureUnit',
  /**
   * Store selected measure unit for Ground Clearance
   */
  MEASUREUNIT_GROUNDCLEARANCE = 'eucFinder_groundClearanceMeasureUnit',
  /**
   * Store selected measure unit for Max Speed
   */
  MEASUREUNIT_MAXSPEED = 'eucFinder_maxSpeedMeasureUnit',
  /**
   * Store selected measure unit for Range
   */
  MEASUREUNIT_RANGE = 'eucFinder_rangeMeasureUnit',
  /**
   * Store selected measure unit for Wheel's dimensions
   */
  MEASUREUNIT_DIMENSIONS = 'eucFinder_dimensionsMeasureUnit',
  /**
   * Store selected measure unit for Weight
   */
  MEASUREUNIT_WEIGHT = 'eucFinder_weightMeasureUnit',
  /**
   * Store selected measure unit for Width
   */
  MEASUREUNIT_WIDTH = 'eucFinder_widthMeasureUnit',

  // Settings: Spec weights' presets

  /**
   * Store selected measure unit for Spec weights' presets
   */
  SPECWEIGHT_PRESET = 'eucFinder_specWeightPreset',

  /**
   * Store custom values for custom preset
   */
  SPECWEIGHT_CUSTOMVALUES = 'eucFinder_specWeightCustomValues',

  // Feature flags

  /**
   * Disable any interaction with GA
   * so statistics are not compromised
   */
  DISABLE_ANALYTICS = 'eucFinder_disableAnalytics',

  /**
   * Should display calculated range based
   * on EUC's battery
   */
  DISABLE_CALCULATEDRANGE = 'eucFinder_disableCalculatedRange',

  /**
   * Should display generic prices
   * and use them as filters and calculations
   */
  ENABLE_PRICE = 'eucFinder_enablePrice',

  /**
   * Should display always all purchase
   * links, even if there is no agreement
   * with the dealer
   */
  ENABLE_PURCHASELINKS = 'eucFinder_enablePurchaseLinks',

  /**
   * Should display navigation for
   * EUC Manager
   */
  ENABLE_EUCMANAGER = 'eucFinder_enableEucManager',

  /**
   * Should force a particular theme
   */
  THEME = 'eucFinder_theme',
}
