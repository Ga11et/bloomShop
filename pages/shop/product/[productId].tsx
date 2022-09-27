import { AdminPanelSettings, Reviews } from '@mui/icons-material'
import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { ProductThunks } from '../../../app/store/reducers/products/productThunks'
import { IAsideMenuItem } from '../../../app/types/layoutComponentsTypres'
import { AsideMenu } from '../../../components/shopComponents/layout/asideMenu'
import { BackPaper } from '../../../components/shopComponents/layout/backPaper'
import { Layout } from '../../../components/shopComponents/layout/layout'
import { ProductChangeForm } from '../../../components/shopComponents/productComponents/changeForm'
import { ProductDeleteForm } from '../../../components/shopComponents/productComponents/deleteCard'
import { ProductInfoCard } from '../../../components/shopComponents/productComponents/mainInfoCard'
import { ProductReviewsCard } from '../../../components/shopComponents/productComponents/reviewsCard'

type ProductPagePropsType = {
}
const ProductPage: FC<ProductPagePropsType> = ({ }) => {

  const router = useRouter()
  const dispatch = useAppDispatch()
  const { productId } = router.query
  const { activeProduct, isLoaded } = useAppSelector(store => store.ProductsReducer)
  const { userData } = useAppSelector(store => store.AuthReducer)


  const [activeMenu, setActiveMenu] = useState(0)

  useEffect(() => {
    if ( typeof productId === 'string') {
      dispatch(ProductThunks.getOneProduct(productId))
    }
  }, [productId])

  const menuItems: IAsideMenuItem[] = [
    { icon: Reviews, title: 'Отзывы', handler: () => setActiveMenu(0) }
  ]
  if (userData?.role === 'admin') menuItems.push({ icon: AdminPanelSettings, title: 'Админская', handler: () => setActiveMenu(1) })

  return <>
    <Layout>
      <BackPaper>
        {isLoaded === false ? <CircularProgress />
        : activeProduct ? <>
          <Typography variant='h4' component='h1' pb={5}>
            {activeProduct.name}
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '20px'
          }}>
            <ProductInfoCard content={activeProduct} />
            <Grid container spacing={2.5}>
              <Grid item xs={0} md={4} lg={3}>
                <AsideMenu items={menuItems} />
              </Grid>
              <Grid item xs={12} md={8} lg={9} sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridGap: '20px'
              }}>
                {activeMenu === 0 && <>
                  <ProductReviewsCard content={activeProduct} />
                </>}
                {activeMenu === 1 && <>
                  <ProductChangeForm content={activeProduct} />
                  <ProductDeleteForm content={activeProduct} />
                </>}
              </Grid>
            </Grid>
          </Box>
        </> : <>
          no content {productId}
        </>}
      </BackPaper>
    </Layout>
  </>
}

export default ProductPage