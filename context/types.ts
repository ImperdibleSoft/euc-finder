import { LoadingState } from '../types';

export type FacebookTheme = 'dark' | 'light';

export interface FacebookData {
  pathname: string;
  sdkLoadingState: LoadingState;
  shouldRender: boolean;
  theme: FacebookTheme;
}

export interface FacebookContextType {
  generateReRenderHook: () => (deps: unknown[]) => FacebookData;
}

export interface ModalsContextType {
  initialDisclaimer: {
    open?: boolean,
    handleOpen?: () => void,
    handleClose?: () => void
  }
}