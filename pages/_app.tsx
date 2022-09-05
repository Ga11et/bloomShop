import { AppProps } from 'next/app'
import { FC } from 'react'
import '../app/styles/app.css'
import { wrapper } from '../app/store/store'

const HomePage: FC<AppProps> = ({ Component, pageProps }) => {

  return <>
    <Component {...pageProps} />
  </>
}

export default wrapper.withRedux(HomePage)