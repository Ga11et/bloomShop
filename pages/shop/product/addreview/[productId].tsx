import { CircularProgress, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks'
import { ProductThunks } from '../../../../app/store/reducers/products/productThunks'
import { BackPaper } from '../../../../components/shopComponents/layout/backPaper'
import { Layout } from '../../../../components/shopComponents/layout/layout'
import { AddingReviewFormCard } from '../../../../components/shopComponents/productComponents/addReviewForm'

type AddReviewPagePropsType = {
  
}
const AddReviewPage: FC<AddReviewPagePropsType> = ({  }) => {

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
        { isLoaded && activeProduct ? <>
          <Typography variant='h4' component='h1' pb={5}>
            Мой отзыв о {activeProduct.name}
          </Typography>
          <AddingReviewFormCard content={activeProduct} />
        </> : <CircularProgress /> }
      </BackPaper>
    </Layout>
  </>
}

export default AddReviewPage