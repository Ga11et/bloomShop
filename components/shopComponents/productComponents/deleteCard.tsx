import { Button, Card, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, MouseEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { ProductThunks } from '../../../app/store/reducers/products/productThunks'
import { IProductR } from '../../../app/types/serverApiTypes'
import { DropAlert } from '../layout/alert'

type ProductDeleteFormPropsType = {
  content: IProductR
}
export const ProductDeleteForm: FC<ProductDeleteFormPropsType> = ({ content }) => {

  const dispatch = useAppDispatch()
  const router = useRouter()
  const { userData } = useAppSelector(store => store.AuthReducer)
  const [isAlertShow, setIsAlertShow] = useState(false)

  const buttonHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const res = await dispatch(ProductThunks.deleteProduct(content))
    if (res.type === 'deleteProduct/fulfilled') {
      setIsAlertShow(true)
      setTimeout(() => {
        router.push('/shop')
      }, 2000);
    }
  }

  return <>
    <DropAlert title='Удаление товара прошло удачно, дождитесь перезагрузки страницы' isShow={isAlertShow} setClose={() => setIsAlertShow(false)} />
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