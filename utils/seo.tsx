import React from 'react';
import { FB_APP_ID } from '../constants';
import { BRAND_COLOR } from '../styles/theme';

const renderCommonHeaders = () => (
  <>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  
    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="/favicon/maskable_icon_x512.png" />
    <meta name="theme-color" content={ BRAND_COLOR } />
    <script
      async
      src="https://cdn.jsdelivr.net/npm/pwacompat"
      crossOrigin="anonymous"
    />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

    <meta property="fb:app_id" content={ `&#123;${ FB_APP_ID }&#125;` } />
  </>
);

export default renderCommonHeaders;
