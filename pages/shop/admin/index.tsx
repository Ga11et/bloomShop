import { Add } from '@mui/icons-material'
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, FormEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { ProductThunks } from '../../../app/store/reducers/products/productThunks'
import { IAsideMenuItem } from '../../../app/types/layoutComponentsTypres'
import { DropAlert } from '../../../components/shopComponents/layout/alert'
import { AsideMenu } from '../../../components/shopComponents/layout/asideMenu'
import { Layout } from '../../../components/shopComponents/layout/layout'

type AdminPagePropsType = {
  
}
const AdminPage: FC<AdminPagePropsType> = ({  }) => {
  
  const router = useRouter()
  const dispatch = useAppDispatch()

  const { isSuccess } = useAppSelector(store => store.ProductsReducer)
  const [isAlertShown, setIsAlertShown] = useState(false)

  useEffect(() => {
    if (isSuccess) setIsAlertShown(true)
  }, [isSuccess])
  
  const menuItems: IAsideMenuItem[] = [
    { icon: Add, title: 'Добавление', handler: () => router.push('/shop/admin') }
  ]
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
    <Layout>
      <DropAlert isShow={isAlertShown} setClose={setIsAlertShown} title='Product added!' />
      <Paper square component='main' sx={{
        backgroundColor: (t) => t.palette.grey[800],
        padding: '20px 0'
      }}>
        <Container maxWidth='xl'>
          <Typography variant='h4' pb={5} pt={3} component='h1'>
            Страница Администратора
          </Typography>
          <Grid container spacing={2} >
            <Grid item lg={2} md={3} >
              <AsideMenu items={menuItems} />
            </Grid>
            <Grid item lg={10} md={9} >
              <Paper elevation={5} sx={{
                padding: '20px'
              }} >
                <Typography variant='h5' component='h2' pb={2}>
                  Добавление товара
                </Typography>
                <Box component='form' onSubmit={addingProductHandler}>
                  <TextField name='name' required fullWidth label='Название' margin='dense'/>
                  <TextField name='description' required fullWidth label='Описание' margin='dense'/>
                  <TextField name='amount' required fullWidth label='Количество в наличии' type='number' margin='dense'/>
                  <TextField name='price' required fullWidth label='Цена' type='number' margin='dense'/>
                  <Button size='large' variant='outlined' type='submit' sx={{
                    marginTop: '20px'
                  }}>Создать продукт</Button>   
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Layout>
  </>
}
export default AdminPage