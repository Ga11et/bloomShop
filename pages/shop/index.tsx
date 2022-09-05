import { createTheme, ThemeProvider } from '@mui/material';
import { FC } from 'react'
import { Header } from '../../components/shopComponents/layout/header'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
type ShopPagePropsType = {
  
}
const ShopPage: FC<ShopPagePropsType> = ({  }) => {
  return <>
    <ThemeProvider theme={darkTheme}>
      <Header />
    </ThemeProvider>
  </>
}

export default ShopPage