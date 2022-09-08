import { Alert, Grow } from '@mui/material'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useAppSelector } from '../../../app/store/hooks'
import { Header } from './header'


type LayoutPropsType = {
  children: ReactNode
}

export const Layout: FC<LayoutPropsType> = ({ children }) => {

  const [isAlertShow, setIsAlertShow] = useState(false)
  const { isAuth } = useAppSelector(state => state.AuthReducer)

  useEffect(() => {
    if (isAuth) setIsAlertShow(true)
  }, [isAuth])

  return <>
    <Grow in={isAlertShow} appear>
      <Alert severity='success' sx={{
        position: 'fixed',
        left: 20,
        bottom: 20,
        minWidth: '200px'
      }} onClose={() => setIsAlertShow(false)}>Logged</Alert>
    </Grow>
    <Header />
    {children}
  </>
}