import { SxProps, Theme } from '@mui/material';
import React from 'react';
import { Store } from './stores';

export * from './apps';
export * from './brands';
export * from './filtering';
export * from './influencers';
export * from './localStorage';
export * from './network';
export * from './settings';
export * from './sorting';
export * from './stores';
export * from './translations';
export * from './videos';
export * from './wheel';
export * from './wheelComparision';
export * from './wheelFeatures';

export interface ClientRoute {
  path: string;
  component: React.FC;
  exact?: boolean;
}

export interface NavigationRoute {
  label: string;
  icon: string;
  path: string;
  secondary?: boolean;
  small?: boolean;
}

export interface ServerRoute {
  path: string
  method: 'get' | 'post' | 'patch' | 'put' | 'delete'
}

export type Order = 'asc' | 'desc';

export interface RouteWithID {
  id: string
}

export interface PurchaseLink {
  discount?: number
  store: Store
  url: string
}

export type LoadingState<T = 'loading'> = 'idle' | T | 'success' | 'error'

export interface LandingSectionProps {
  callToAction: string;
  description: string;
  path: string;
  picture: string;
  sx?: SxProps<Theme>;
  title: string;
}
