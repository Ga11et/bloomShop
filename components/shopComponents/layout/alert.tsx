import { Alert, Grow } from '@mui/material'
import { FC, SyntheticEvent } from 'react'
import { useAppDispatch } from '../../../app/store/hooks'
import { AlertSlice } from '../../../app/store/reducers/alerts/alertsReducer'
import { IAlert } from '../../../app/types/alertSliceTypes'

type DropAlertPropsType = {
  content: IAlert
}
export const DropAlert: FC<DropAlertPropsType> = ({ content }) => {

  const dispatch = useAppDispatch()

  return <>
    <Grow in={true} appear>
      <Alert variant='outlined' severity={content.type} sx={{
        minWidth: '300px'
      }} onClose={() => dispatch(AlertSlice.actions.deleteAlert(content.id))}>{content.title}</Alert>
    </Grow>
  </>
}