import { Button, Card, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, MouseEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { AlertSlice } from '../../../app/store/reducers/alerts/alertsReducer'
import { ProductThunks } from '../../../app/store/reducers/products/productThunks'
import { IProductR } from '../../../app/types/serverApiTypes'

type ProductDeleteFormPropsType = {
  content: IProductR
}
export const ProductDeleteForm: FC<ProductDeleteFormPropsType> = ({ content }) => {

  const dispatch = useAppDispatch()
  const router = useRouter()
  const { userData } = useAppSelector(store => store.AuthReducer)

  const buttonHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    const res = await dispatch(ProductThunks.deleteProduct(content))
    if (res.type === 'deleteProduct/fulfilled') {
      dispatch(AlertSlice.actions.addAlert({ id: Date.now().toString(), title: 'Продукс успешно удален', type: 'success' }))
      router.push('/shop')
    }
  }

  return <>
    {userData && userData.role === 'admin' && <>
      <Card elevation={5} sx={{
        padding: '20px'
      }}>
        <Typography variant='h5' component='h2' pb={2} color='error' >
          Опасная зона
        </Typography>
        <Button size='large' variant='outlined' color='error' onClick={buttonHandler} sx={{
          marginTop: '20px'
        }}>Удалить товар</Button>
      </Card>
    </>}
  </>
}