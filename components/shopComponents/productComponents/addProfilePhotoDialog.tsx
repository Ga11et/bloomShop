import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Tooltip, Typography } from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'
import { useAppDispatch } from '../../../app/store/hooks'
import { ProductThunks } from '../../../app/store/reducers/products/productThunks'
import { IProductImage } from '../../../app/types/clientApiTypes'

type ProductPhotoAddingDialogPropsType = {
  isShow: boolean
  onClose: Function
  productId: string
}
export const ProductPhotoAddingDialog: FC<ProductPhotoAddingDialogPropsType> = ({ isShow, onClose, productId }) => {

  const dispatch = useAppDispatch()

  const [activeImage, setActiveImage] = useState('https://via.placeholder.com/150')


  const submitHandler = () => {
    dispatch(ProductThunks.postPhoto({ imageCode: activeImage, productId: productId }))
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
      <DialogTitle variant='h5' color={(t) => t.palette.text.primary}>
        Добавить новое фото
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box>
          <img src={activeImage} alt='large' style={{
            borderRadius: '9px',
            objectFit: 'cover',
            width: '300px',
            height: '300px'
          }} />
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