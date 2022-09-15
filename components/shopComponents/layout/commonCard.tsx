import { Card } from '@mui/material'
import { FC, ReactNode } from 'react'

type CommonCardPropsType = {
  children: ReactNode
}
export const CommonCard: FC<CommonCardPropsType> = ({ children }) => {
  return <>
    <Card elevation={5} sx={{
      padding: '20px'
    }}>
      {children}
    </Card>
  </>
}