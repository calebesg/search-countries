import { useEffect } from 'react';
import Router from 'next/router';
import * as NProgress from 'nprogress';
import * as PropTypes from 'prop-types';
import * as React from 'react';

export default function ProgressBar({
  startPosition = 0.3,
  stopDelayMs = 200,
  showOnShallow = true,
}) {
  let timer = null;

  useEffect(() => {
    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeEnd);
      Router.events.off('routeChangeError', routeChangeEnd);
    };
  }, []);

  const routeChangeStart = (_, { shallow }) => {
    if (!shallow || showOnShallow) {
      NProgress.set(startPosition);
      NProgress.start();
    }
  };

  const routeChangeEnd = (_, { shallow }) => {
    if (!shallow || showOnShallow) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        NProgress.done(true);
      }, stopDelayMs);
    }
  };

  return <div></div>;
}

ProgressBar.propTypes = {
  startPosition: PropTypes.number,
  stopDelayMs: PropTypes.number,
  showOnShallow: PropTypes.bool,
};
