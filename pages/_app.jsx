import { Fragment } from 'react';

import 'remixicon/fonts/remixicon.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? Fragment;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
