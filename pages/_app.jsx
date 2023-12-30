import { Fragment } from 'react';
import Script from 'next/script';

import 'remixicon/fonts/remixicon.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? Fragment;

  return (
    <Layout>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
       `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
