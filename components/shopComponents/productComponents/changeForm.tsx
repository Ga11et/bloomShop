import { Clear } from '@mui/icons-material'
import { Box, Button, Card, IconButton, TextField, Typography } from '@mui/material'
import { FC, FormEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { AlertSlice } from '../../../app/store/reducers/alerts/alertsReducer'
import { ProductThunks } from '../../../app/store/reducers/products/productThunks'
import { IProductImage } from '../../../app/types/clientApiTypes'
import { IProductR } from '../../../app/types/serverApiTypes'
import { ProductPhotoAddingDialog } from './addProfilePhotoDialog'

type ProductChangeFormPropsType = {
  content: IProductR
}
export const ProductChangeForm: FC<ProductChangeFormPropsType> = ({ content }) => {

  const dispatch = useAppDispatch()
  const { userData } = useAppSelector(store => store.AuthReducer)

  const [isDialogOpen, setDialogOpen] = useState(false)

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name') as string
    const description = data.get('description') as string
    const price = data.get('price') as number | null
    const amount = data.get('amount') as number | null
    if (name && description && amount && price) {
      const res = await dispatch(ProductThunks.updateProduct({ id: content.id, name, description, amount, price }))
      if (res.type === 'updateProduct/fulfilled')
        dispatch(AlertSlice.actions.addAlert({ id: Date.now().toString(), title: 'Продукт успешно изменен', type: 'success' }))
    }
  }

  return <>
    {userData && userData.role === 'admin' && <>
      <Card elevation={5} sx={{
        padding: '20px'
      }}>
        <Typography variant='h5' component='h2' pb={2} color={(t) => t.palette.text.primary} >
          Изменение товара
        </Typography>
        <Box component='form' onSubmit={submitHandler}>
          <TextField name='name' defaultValue={content.name} required fullWidth label='Название' margin='dense' />
          <TextField name='description' defaultValue={content.description} required fullWidth label='Описание' margin='dense' />
          <TextField name='amount' defaultValue={content.amount} required fullWidth label='Количество в наличии' type='number' margin='dense' />
          <TextField name='price' defaultValue={content.price} required fullWidth label='Цена' type='number' margin='dense' />
          <Button size='large' variant='contained' type='submit' sx={{
            marginTop: '20px'
          }}>Отправить</Button>
        </Box>
        
      </Card>
      <Card elevation={5} sx={{
        padding: '20px'
      }}>
        <ProductPhotoAddingDialog isShow={isDialogOpen} onClose={setDialogOpen} productId={content.id} />
        <Typography variant='h5' component='h2' pb={2} color={(t) => t.palette.text.primary} >
          Изменение картинок
        </Typography>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
          {content.image.map(image => <ImageItem content={image} key={image.id} productId={content.id} />)}
        </Box>
        <Button size='large' variant='contained' type='button' onClick={() => setDialogOpen(true)}>Добавить картинку</Button>
      </Card>
    </>}
  </>
}

type ImageItemPropsType = {
  content: IProductImage,
  productId: string
}
const ImageItem: FC<ImageItemPropsType> = ({ content, productId }) => {

  const dispatch = useAppDispatch()

  const deletePhotoHandler = () => {
    dispatch(ProductThunks.deletePhoto({ imageId: content.id, productId, publicId: content.publicId }))
  }

  return <>
    <Box sx={{
      width: '100px',
      height: '100px',
      marginBottom: '10px',
      marginRight: '10px',
      position: 'relative'
    }}>
      <img src={content.small} style={{
        display: 'block',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: '4px'
      }} />
      <IconButton onClick={deletePhotoHandler} size='small' sx={{
        position: 'absolute',
        right: '0',
        top: '0',
        borderRadius: '4px'
      }}>
        <Clear color='error' />
      </IconButton>
    </Box>
  </>
}