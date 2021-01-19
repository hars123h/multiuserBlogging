import Head from 'next/head'
import Nprogress from 'nprogress';


import '../public/css/styles.css'
import '../node_modules/nprogress/nprogress.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
