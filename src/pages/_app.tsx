import type { AppProps } from 'next/app'
import Head from 'next/head'

import Theme from '@context/Theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Theme>
        <Head>
          <title>Syanne Sousa Advocacia</title>
        </Head>
        <Component {...pageProps} />
      </Theme>
  )
}
