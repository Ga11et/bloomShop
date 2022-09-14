import { Box, Button, Card, TextField, Typography } from '@mui/material'
import { FC, FormEvent } from 'react'
import { useAppSelector } from '../../../app/store/hooks'
import { IProductR } from '../../../app/types/serverApiTypes'

type ProductChangeFormPropsType = {
  content: IProductR
}
export const ProductChangeForm: FC<ProductChangeFormPropsType> = ({ content }) => {

  const { userData } = useAppSelector(store => store.AuthReducer)

  const submitHandler = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return <>
    {userData && userData.role === 'admin' && <>
      <Card elevation={5} sx={{
        padding: '20px'
      }}>
        <Typography variant='h5' component='h2' pb={2} color='error' >
          Изменение товара
        </Typography>
        <Box component='form' onSubmit={submitHandler}>
          <TextField name='name' defaultValue={content.name} required fullWidth label='Название' margin='dense' />
          <TextField name='description' defaultValue={content.description} required fullWidth label='Описание' margin='dense' />
          <TextField name='amount' defaultValue={content.amount} required fullWidth label='Количество в наличии' type='number' margin='dense' />
          <TextField name='price' defaultValue={content.price} required fullWidth label='Цена' type='number' margin='dense' />
          <Button size='large' variant='outlined' type='submit' sx={{
            marginTop: '20px'
          }}>Отправить</Button>
        </Box>
      </Card>
    </>}
  </>
}