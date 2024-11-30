import { useEffect } from 'react'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DefaultSeo } from 'next-seo'
import '../styles/globals.css';
import Layout from '../components/layout/layout';
import SEO from '../next-seo.config'
import { pageview } from '../lib/gtm'

function MyApp({ Component, pageProps }) {
 // const store = useStore(pageProps.initialState)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  if(router.asPath =='/test')  {
    return (
      <Component {...pageProps} />
    )
  }

  return (    
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;