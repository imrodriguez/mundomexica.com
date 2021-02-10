import { config } from '@fortawesome/fontawesome-svg-core';
import { Layout } from '../components/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};