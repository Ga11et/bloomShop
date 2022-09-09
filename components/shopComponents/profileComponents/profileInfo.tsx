import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Paper, TextField, Tooltip, Typography } from '@mui/material'
import { createRef, FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { ProfileThunks } from '../../../app/store/reducers/profile/profileThunks'

type ProfileInfoPropsType = {

}
export const ProfileInfo: FC<ProfileInfoPropsType> = ({ }) => {

  const dispatch = useAppDispatch()
  const statusInputRef = createRef<HTMLInputElement>()
  const { profileData, isLoaded } = useAppSelector(store => store.ProfileReducer)

  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false)

  const submitStatusHandler = () => {
    if (statusInputRef.current) dispatch(ProfileThunks.setStatus({ userId: profileData.id, newStatus: statusInputRef.current.value }))
    setIsStatusDialogOpen(false)
  }

  return <>
    {profileData && <Grid component={Paper} p={3} elevation={5} container>
      <Grid item lg={3} md={4} sm={6} xs={7} >
        <Tooltip title='Изменить фото'>
          <IconButton component='label'>
            <Avatar src={profileData.image} alt={profileData.firstName} sx={{
              width: '200px',
              height: '200px'
            }} />
            <input type='file' hidden onChange={(event) => console.log(event)} />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item lg={9} md={8} sm={6} xs={5}>
        <Typography pl={1} variant='h3' component='h2' mb={2}>
          {profileData.login}
        </Typography>
        <Typography pl={1} variant='body1' component='p'>
          {profileData.firstName} {profileData.secondName}
        </Typography>
        <Typography pl={1} variant='body1' component='p'>
          {profileData.email}
        </Typography>
        <Button fullWidth onClick={() => setIsStatusDialogOpen(true)} sx={{
          textTransform: 'none',
          justifyContent: 'flex-start'
        }}>{profileData.status}</Button>
        <Dialog open={isStatusDialogOpen} onClose={() => setIsStatusDialogOpen(false)}>
          <DialogTitle>Изменение статуса</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Для того чтобы изменить ваш статус, введите новый
            </DialogContentText>
            <TextField label='Статус' inputRef={statusInputRef} fullWidth margin='normal' defaultValue={profileData.status} />
          </DialogContent>
          <DialogActions>
            <Button color='error' onClick={() => setIsStatusDialogOpen(false)}>Закрыть</Button>
            <Button color='success' onClick={submitStatusHandler}>Подтвердить</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>}
  </>
}