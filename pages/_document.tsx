// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { MEASUREMENT_ID } from '../constants';

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  renderAnalytics() {
    if (process.env.NODE_ENV !== 'production') {
      return null;
    }

    return (
      <>
        <script
          async
          src={ `https://www.googletagmanager.com/gtag/js?id=${ MEASUREMENT_ID }` }
        />

        <script dangerouslySetInnerHTML={
          {
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', '${ MEASUREMENT_ID }')
            `
          }
        } />
      </>
    );
  }

  render() {
    return (
      <Html>
        <Head>
          { this.renderAnalytics() }
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