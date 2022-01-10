export enum LOCAL_STORAGE_KEY {
  // Development

  // Generics

  /**
   * UI Language
   */
  LANGUAGE = 'i18nextLng',

  /**
   * User has already accepted initial 
   * info disclaimer
   */
  INITIAL_DISCLAIMER = `eucFinder_initialDisclaimer`,

  /**
   * User selected region
   */
  REGION = `eucFinder_region`,

  // Videos

  /**
   * Last time user visited video page
   */
  VIDEO_LASTVISIT = `eucFinder_videoLastVisit`,

  // Settings: Measure units

  /**
   * Store selected measure unit for Diameter
   */
  MEASUREUNIT_DIAMETER = `eucFinder_measureUnitDiameter`,
  /**
   * Store selected measure unit for Ground Clearance
   */
  MEASUREUNIT_GROUNDCLEARANCE = `eucFinder_measureUnitGroundClearance`,
  /**
   * Store selected measure unit for Max Speed
   */
  MEASUREUNIT_MAXSPEED = `eucFinder_measureUnitMaxSpeed`,
  /**
   * Store selected measure unit for Range
   */
  MEASUREUNIT_RANGE = `eucFinder_measureUnitRange`,
  /**
   * Store selected measure unit for Weight
   */
  MEASUREUNIT_WEIGHT = `eucFinder_measureUnitWeight`,
  /**
   * Store selected measure unit for Width
   */
  MEASUREUNIT_WIDTH = `eucFinder_measureUnitWidth`,

  // Settings: Spec weights' presets

  /**
   * Store selected measure unit for Spec weights' presets
   */
  SPECWEIGHT_PRESET = `eucFinder_specWeightPreset`,

  // Feature flags

  /**
   * Should display generic prices
   * and use them as filters and calculations
   */
  ENABLE_PRICE = `eucFinder_enablePrice`,

  /**
   * Should display always all purchase
   * links, even if there is no agreement
   * with the dealer
   */
  ENABLE_PURCHASELINKS = `eucFinder_enablePurchaseLinks`,

  /**
   * Should force a particular theme
   */
  SHOW_THEME = `eucFinder_theme`,

  /**
   * Disable any interaction with GA
   * so statistics are not compromised
   */
  DISABLE_ANALYTICS = 'test',
}