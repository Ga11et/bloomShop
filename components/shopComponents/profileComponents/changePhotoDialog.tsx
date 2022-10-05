import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Tooltip, Typography } from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'
import { useAppDispatch } from '../../../app/store/hooks'
import { useUpdateMutation } from '../../../app/store/reducers/profile/profileQuery'

type ProfileChangePhotoDialogPropsType = {
  isShow: boolean
  onClose: Function
  defaultImage: string
}
export const ProfileChangePhotoDialog: FC<ProfileChangePhotoDialogPropsType> = ({ isShow, onClose, defaultImage }) => {

  const [activeImage, setActiveImage] = useState(defaultImage)
  const [updatePhoto, result] = useUpdateMutation()

  const submitHandler = () => {
    if (activeImage) updatePhoto({ newPhoto: activeImage })
  }
  const photoChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    if (event && event.target && event.target.files)
      reader.readAsDataURL(event.target.files[0])
      reader.onloadend = () => {
        setActiveImage(reader.result as string)
      }
  }

  return <>
    <Dialog open={isShow} onClose={() => onClose(false)} fullWidth disableScrollLock>
      <DialogTitle variant='h5'>
          Изменить фото профиля
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '65% 1fr',
        }}>
          <Box sx={{
            gridColumn: '1 / 2',
            gridRow: '1 / 3',
            height: '250px',
            backgroundColor: (t) => t.palette.grey[700],
            borderRadius: '9px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src={activeImage} alt='large' style={{
              height: '90%',
              borderRadius: '50%',
              objectFit: 'cover',
              width: '90%'
            }} />
          </Box>
          <Box sx={{
            gridColumn: '2 / 3',
            gridRow: '1 / 2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src={activeImage} alt='medium' style={{
              height: '150px',
              objectFit: 'cover',
              width: '150px',
              borderRadius: '50%'
            }} />
          </Box>
          <Box sx={{
            gridColumn: '2 / 3',
            gridRow: '2 / 3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src={activeImage} alt='small' style={{
              height: '50px',
              objectFit: 'cover',
              width: '50px',
              borderRadius: '50%'
            }} />
          </Box>
        </Box>
        <label>
          <Tooltip title='изменить фото'>
          <Typography component='p' pt={2} variant='body1' sx={{
            borderBottom: '1px dotted grey',
            display: 'inline-block',
            ":hover": {
              cursor: 'pointer'
            }
          }}>
            Изменить
          </Typography>
          </Tooltip>
          <input type='file' onChange={photoChangeHandler} style={{ display: 'none' }} />
        </label>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button onClick={submitHandler} color='success'>Подтвердить</Button>
        <Button onClick={() => onClose(false)} color='error' >Закрыть</Button>
      </DialogActions>
    </Dialog>
  </>
}