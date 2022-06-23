import { DefaultSeo } from 'next-seo';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo defaultTitle="Search Countries" />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
