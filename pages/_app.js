import { config } from '@fortawesome/fontawesome-svg-core';
import { Layout } from '../components/Layout';
import { useEffect } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import ReactGA from 'react-ga';

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.initialize('G-0QRWQ5EG14');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};