import { Alert, Grow } from '@mui/material'
import { FC } from 'react'

type DropAlertPropsType = {
  isShow: boolean
  setClose: Function
  title: string
}
export const DropAlert: FC<DropAlertPropsType> = ({ isShow, setClose, title }) => {
  return <>
    <Grow in={isShow} appear>
      <Alert severity='success' sx={{
        position: 'fixed',
        left: 20,
        bottom: 20,
        minWidth: '200px'
      }} onClose={() => setClose(false)}>{title}</Alert>
    </Grow>
  </>
}