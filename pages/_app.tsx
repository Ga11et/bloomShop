import { AppProps } from 'next/app'
import { FC } from 'react'
import '../app/styles/app.css'
import { wrapper } from '../app/store/store'
import { createTheme, ThemeProvider } from '@mui/material'

const HomePage: FC<AppProps> = ({ Component, pageProps }) => {
  
  const darkTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        paper: '#B0CDC8',
        default: '#ECE6DB'
      },
      text: {
        primary: '#2C3E37',
        secondary: '#659A99'
      },
      primary: {
        main: '#659A99'
      },
      secondary: {
        main: '#652831',
        contrastText: '#EF4A5B'
      }
    },
    typography: {
      fontFamily: 'Montserrat',
    },
  });

  return <>
    <ThemeProvider theme={darkTheme} >
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default wrapper.withRedux(HomePage)