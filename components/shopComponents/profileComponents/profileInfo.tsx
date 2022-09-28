import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Paper, TextField, Tooltip, Typography } from '@mui/material'
import { createRef, FC, useState } from 'react'
import { useUpdateStatusMutation } from '../../../app/store/reducers/profile/profileQuery'
import { IProfileData } from '../../../app/types/profileSliceTypes'
import { ProfileChangePhotoDialog } from './changePhotoDialog'

type ProfileInfoPropsType = {
  content?: IProfileData
}
export const ProfileInfo: FC<ProfileInfoPropsType> = ({ content }) => {

  const statusInputRef = createRef<HTMLInputElement>()
  const [isModalShow, setIsModalShow] = useState(false)
  const [postStatus, result] = useUpdateStatusMutation()


  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false)

  const submitStatusHandler = () => {
    if (statusInputRef.current && content) postStatus({ userId: content.id, newStatus: statusInputRef.current.value })
    setIsStatusDialogOpen(false)
  }

  return <>
    {content && <>
      <ProfileChangePhotoDialog isShow={isModalShow} onClose={setIsModalShow} defaultImage={content.image} />
      <Grid component={Paper} p={3} elevation={5} container>
        <Grid item lg={3} md={4} sm={6} xs={7} >
          <Tooltip title='Изменить фото'>
            <IconButton component='label' onClick={() => setIsModalShow(true)}>
              <Avatar src={content.image} alt={content.firstName} sx={{
                width: '200px',
                height: '200px'
              }} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item lg={9} md={8} sm={6} xs={5}>
          <Typography pl={1} variant='h3' component='h2' mb={2}>
            {content.login}
          </Typography>
          <Typography pl={1} variant='body1' component='p'>
            {content.firstName} {content.secondName}
          </Typography>
          <Typography pl={1} variant='body1' component='p'>
            {content.email}
          </Typography>
          <Button fullWidth onClick={() => setIsStatusDialogOpen(true)} sx={{
            textTransform: 'none',
            justifyContent: 'flex-start'
          }}>{content.status}</Button>
          <Dialog open={isStatusDialogOpen} onClose={() => setIsStatusDialogOpen(false)}>
            <DialogTitle>Изменение статуса</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Для того чтобы изменить ваш статус, введите новый
              </DialogContentText>
              <TextField label='Статус' inputRef={statusInputRef} fullWidth margin='normal' defaultValue={content.status} />
            </DialogContent>
            <DialogActions>
              <Button color='error' onClick={() => setIsStatusDialogOpen(false)}>Закрыть</Button>
              <Button color='success' onClick={submitStatusHandler}>Подтвердить</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </>}
  </>
}