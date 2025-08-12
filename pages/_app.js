import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    const preventZoom = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.deltaY || e.deltaX)) {
        e.preventDefault();
      }
    };

    const preventKeyZoom = (e) => {
      if ((e.ctrlKey || e.metaKey) &&
        (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventZoom, { passive: false });
    window.addEventListener('keydown', preventKeyZoom);

    return () => {
      window.removeEventListener('wheel', preventZoom);
      window.removeEventListener('keydown', preventKeyZoom);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>Product Management</title>
        <link rel="icon" href="/icons/icon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;