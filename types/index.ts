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
export * from './videos';
export * from './wheel';
export * from './wheelComparision';
export * from './wheelFeatures';

export interface ClientRoute {
  path: string;
  component: React.FC;
  exact?: boolean;
}

export interface BottomNavigationRoute {
  label: string;
  icon: string;
  path: string;
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

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'