export * from './analytics';
export * from './branding';
export * from './navigation';
export * from './regions';
export * from './wheelFeatures';

export const isFacebookEnabled = () =>
  process.env.NODE_ENV === 'production';
