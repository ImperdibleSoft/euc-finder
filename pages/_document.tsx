// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon/maskable_icon_x512.png" />
          <meta name="theme-color" content="#2b2d42" />
          <script
            async
            src="https://cdn.jsdelivr.net/npm/pwacompat"
            crossOrigin="anonymous"
          />
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
