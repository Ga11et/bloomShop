import { Box, CircularProgress, Container, Grid, Paper, Typography } from '@mui/material'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { ProductThunks } from '../../app/store/reducers/products/productThunks'
import { Layout } from '../../components/shopComponents/layout/layout'
import { ProductPlate } from '../../components/shopComponents/shopComponents/productPlate'

type ShopPagePropsType = {

}

const ShopPage: FC<ShopPagePropsType> = ({  }) => {

  const dispatch = useAppDispatch()
  const { products, isLoaded } = useAppSelector(store => store.ProductsReducer)

  useEffect(() => {
    dispatch(ProductThunks.getProducts())
  }, [])

  useEffect(() => {
    console.log(isLoaded)
  }, [products])

  return <>
    <Layout>
      <Paper square sx={{
        backgroundColor: (t) => t.palette.grey[100],
        padding: '20px 0'
      }}>
        <Container maxWidth='xl'>
          <Typography variant='h4' pb={5} pt={3} component='h1'>
            Товары
          </Typography>
          <Grid container spacing={2}>
            <Grid item lg={3} md={4}>
              <Paper elevation={5} sx={{
                padding: '20px'
              }}>
                <Typography variant='h5' component='h3'>
                  Фильтры
                </Typography>
              </Paper>
            </Grid>
            <Grid item lg={9} md={8}>
              <Box sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridGap: '20px'              }}>
                {isLoaded ? products.map(product => (
                  <ProductPlate content={product} key={product.id} />
                )) : <CircularProgress />}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Layout>
  </>
}

export default ShopPage