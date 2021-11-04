import React from 'react';
import { Store } from './stores';

export * from './brands';
export * from './filtering';
export * from './localStorage';
export * from './settings';
export * from './sorting';
export * from './stores';
export * from './wheel';
export * from './wheelFeatures';

export interface ClientRoute {
  path: string;
  component: React.FC;
  exact?: boolean;
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