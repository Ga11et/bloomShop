import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { FC, FormEvent } from 'react'
import { useAppDispatch } from '../../../app/store/hooks'
import { ProductThunks } from '../../../app/store/reducers/products/productThunks'

type AddProductPropsType = {

}
export const AddProduct: FC<AddProductPropsType> = ({ }) => {

  const dispatch = useAppDispatch()

  const addingProductHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name') as string
    const description = data.get('description') as string
    const amount = data.get('amount') as number | null
    const price = data.get('price') as number | null
    if ( name && description && amount && price ) dispatch(ProductThunks.postProduct({ name, description, amount, price, image: 'test' }))
  }

  return <>
    <Paper elevation={5} sx={{
      padding: '20px'
    }} >
      <Typography variant='h5' component='h2' pb={2}>
        Добавление товара
      </Typography>
      <Box component='form' onSubmit={addingProductHandler}>
        <TextField name='name' required fullWidth label='Название' margin='dense' />
        <TextField name='description' required fullWidth label='Описание' margin='dense' />
        <TextField name='amount' required fullWidth label='Количество в наличии' type='number' margin='dense' />
        <TextField name='price' required fullWidth label='Цена' type='number' margin='dense' />
        <Button size='large' variant='outlined' type='submit' sx={{
          marginTop: '20px'
        }}>Создать продукт</Button>
      </Box>
    </Paper>
  </>
}