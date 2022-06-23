import { DefaultSeo } from 'next-seo';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from '../contexts/ThemeProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <DefaultSeo defaultTitle="Search Countries" />
      <NextNProgress
        color="#29D"
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
