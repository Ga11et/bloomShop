import { Alert, Grow } from '@mui/material'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { AlertSlice } from '../../../app/store/reducers/alerts/alertsReducer'
import { AlertContainer } from './alertContainer'
import { Header } from './header'


type LayoutPropsType = {
  children: ReactNode
}

export const Layout: FC<LayoutPropsType> = ({ children }) => {

  return <>
    <AlertContainer />
    <Header />
    {children}
  </>
}