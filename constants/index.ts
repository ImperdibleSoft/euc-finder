export * from './analytics';
export * from './bottomNavigation';
export * from './branding';
export * from './regions';
export * from './wheelFeatures';

export const isFacebookEnabled = () =>
  process.env.NODE_ENV === 'production';