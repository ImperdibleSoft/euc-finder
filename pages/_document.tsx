// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { APP_NAME } from '../constants';

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
          
          <meta name="author" content="ImperdibleSoft (Rafael Pérez <rafael.perez@imperdiblesoft.com>)" />
          <meta property="og:site_name" content={ APP_NAME } />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;