export type TranslationToken =
    // Columns
    | 'columns-title'

    // Common
    | 'at'
    | 'unicycles-label'
    | 'search-label'
    | 'selectAnOption-label'
    | 'reset-label'
    | 'without'
    | 'with'
    | 'withAny'
    | 'maximum'
    | 'minimum'
    | 'region-label'
    | 'europe-label'
    | 'america-label'
    | 'asia-label'
    | 'id'
    | 'brandId'
    | 'name'
    | 'price'
    | 'ratedPower'
    | 'peakPower'
    | 'maxGradibility'
    | 'maxSpeed'
    | 'battery'
    | 'batteryOutput'
    | 'range'
    | 'voltage'
    | 'diameter'
    | 'width'
    | 'groundClearance'
    | 'weight'
    | 'trolleyHandle'
    | 'antiSpin'
    | 'kickstand'
    | 'headlight'
    | 'tailLight'
    | 'leds'
    | 'sound'
    | 'display'
    | 'suspension'
    | 'color'

    // Details
    | 'defaultDescription-msg'
    | 'noWheel-msg'
    | 'otherStores-title'
    | 'buyAt-label'
    | 'pictures-title'
    | 'wheelPicture-msg'
    | 'additionalSpecs-title'
    | 'highlightedSpecs-title'
    | 'mainSpecs-title'

    // Disclaimers
    | 'models-title'
    | 'newModels-msg'
    | 'olderVersions-msg'
    | 'range-title'
    | 'displayedRange-msg'
    | 'usageExamples-msg'
    | 'ok-label'

    // Filters
    | 'filters-title'

    // Footer
    | 'createdBy-msg'
    | 'information-label'
    | 'information-msg'
    | 'disclaimer1-msg'
    | 'disclaimer2-msg'

    // List
    | 'emptyCase-title'
    | 'noWheels-msg'
    | 'changeFilters-msg'
    | 'changeFilters-btn'
    | 'resetFilters-btn'
    | 'details-btn'
    | 'ascending-label'
    | 'descending-label'
    | 'sortBy-label'
    | 'order-label'

    // Settings
    | 'settings-title'
    | 'measureUnits-title'
    | 'save-btn'
    | 'centimeters'
    | 'inches'
    | 'kilometers'
    | 'miles'
    | 'perHour'
    | 'kilograms'
    | 'pounds'
    | 'milimeters'

export interface Language {
  translation: Record<TranslationToken, string>
}