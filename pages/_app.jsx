import { DefaultSeo } from 'next-seo';
import ProgressBar from '../components/ProgressBar';
import { ThemeProvider } from '../contexts/ThemeContext';

import '../styles/globals.css';
import '../styles/components/ProgressBar.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <DefaultSeo defaultTitle="Search Countries" />
      <ProgressBar startPosition={0.3} stopDelayMs={200} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
