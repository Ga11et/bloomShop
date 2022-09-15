import { Add } from '@mui/icons-material'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { AlertSlice } from '../../../app/store/reducers/alerts/alertsReducer'
import { IAsideMenuItem } from '../../../app/types/layoutComponentsTypres'
import { AddProduct } from '../../../components/shopComponents/adminComponents/addProduct'
import { AsideMenu } from '../../../components/shopComponents/layout/asideMenu'
import { Layout } from '../../../components/shopComponents/layout/layout'

type AdminPagePropsType = {
  
}
const AdminPage: FC<AdminPagePropsType> = ({  }) => {
  
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { isSuccess } = useAppSelector(store => store.ProductsReducer)

  useEffect(() => {
    if (isSuccess) dispatch(AlertSlice.actions.addAlert({ id: Date.now().toString(), title: 'Продукт успешно добавлен', type: 'success' }))
  }, [isSuccess])
  
  const menuItems: IAsideMenuItem[] = [
    { icon: Add, title: 'Добавление', handler: () => router.push('/shop/admin') }
  ]

  return <>
    <Layout>
      <Paper square component='main' sx={{
        backgroundColor: (t) => t.palette.grey[100],
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
              <AddProduct />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Layout>
  </>
}
export default AdminPage