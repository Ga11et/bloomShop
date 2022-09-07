import { AppProps } from 'next/app'
import { FC } from 'react'
import '../app/styles/app.css'
import { wrapper } from '../app/store/store'
import { createTheme, ThemeProvider } from '@mui/material'

const HomePage: FC<AppProps> = ({ Component, pageProps }) => {
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return <>
    <ThemeProvider theme={darkTheme} >
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default wrapper.withRedux(HomePage)