import { Box, CircularProgress, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { ProductThunks } from '../../../app/store/reducers/products/productThunks'
import { BackPaper } from '../../../components/shopComponents/layout/backPaper'
import { Layout } from '../../../components/shopComponents/layout/layout'
import { ProductChangeForm } from '../../../components/shopComponents/productComponents/changeForm'
import { ProductDeleteForm } from '../../../components/shopComponents/productComponents/deleteCard'
import { ProductInfoCard } from '../../../components/shopComponents/productComponents/mainInfoCard'

type ProductPagePropsType = {
}
const ProductPage: FC<ProductPagePropsType> = ({ }) => {

  const router = useRouter()
  const dispatch = useAppDispatch()
  const { productId } = router.query
  const { activeProduct, isLoaded } = useAppSelector(store => store.ProductsReducer)

  useEffect(() => {
    if ( typeof productId === 'string') {
      dispatch(ProductThunks.getOneProduct(productId))
    }
  }, [productId])

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
            <ProductChangeForm content={activeProduct} />
            <ProductDeleteForm content={activeProduct} />
          </Box>
        </> : <>
          no content {productId}
        </>}
      </BackPaper>
    </Layout>
  </>
}

export default ProductPage