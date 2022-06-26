import { DefaultSeo } from 'next-seo';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from '../contexts/ThemeContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <DefaultSeo defaultTitle="Search Countries" />
      <NextNProgress
        color="#38bdf8"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
