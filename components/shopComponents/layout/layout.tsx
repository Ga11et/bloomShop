import { createTheme, ThemeProvider } from '@mui/material';
import { FC, ReactNode } from 'react'
import { Header } from './header'


type LayoutPropsType = {
  children: ReactNode
}

export const Layout: FC<LayoutPropsType> = ({ children }) => {

  return <>
      <Header />
      {children}
  </>
}