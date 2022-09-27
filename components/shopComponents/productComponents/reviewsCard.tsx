import { Box, Button, Divider, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { useGetProductReviewsQuery } from '../../../app/store/reducers/reviews/reviewsQuery'
import { IReviewsCounts } from '../../../app/types/clientApiTypes'
import { IProductR } from '../../../app/types/serverApiTypes'
import { CommonCard } from '../layout/commonCard'
import { ProductCircleRating } from './circleRating'
import { ProductReview } from './review'
import { ProductReviewsCount } from './reviewCounts'

type ProductReviewsCardPropsType = {
  content: IProductR
}
export const ProductReviewsCard: FC<ProductReviewsCardPropsType> = ({ content }) => {

  const router = useRouter()
  const { productId } = router.query
  const { data } = useGetProductReviewsQuery(productId ? productId as string : 'none')
  const [reviewsCount, setReviewsCount] = useState<IReviewsCounts>({ one: 0, two: 0, three: 0, four: 0, five: 0, all: 0 })
  const [averageRating, setAverageRating] = useState(0)

  useEffect(() => {
    if (data?.data) {
      const letsCount: IReviewsCounts = { one: 0, two: 0, three: 0, four: 0, five: 0, all: 0 }
      let ratingsSumm = 0
      data.data.forEach(el => {
        if (el.rating === 1) letsCount.one += 1
        if (el.rating === 2) letsCount.two += 1
        if (el.rating === 3) letsCount.three += 1
        if (el.rating === 4) letsCount.four += 1
        if (el.rating === 5) letsCount.five += 1
        letsCount.all += 1
        ratingsSumm += el.rating
      })
      setReviewsCount(letsCount)
      if (letsCount.all !== 0) setAverageRating(+(ratingsSumm / letsCount.all).toFixed(1))
    }
  }, [data])

  return <>
    {data && data.data && <>
      <CommonCard>
        <Typography variant='h5' pb={5} fontWeight={500} component='h2'>
          Отзывы о {content.name}
        </Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'min-content 1fr',
          gridGap: '50px'
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <ProductCircleRating rating={averageRating} reviewsCount={data.data.length} />
            <Button variant='contained' size='large' sx={{
              marginTop: '30px'
            }} onClick={() => router.push(`/shop/product/addreview/${content.id}`)} >Оставить отзыв</Button>
          </Box>
          <ProductReviewsCount counts={reviewsCount} />
        </Box>
        {data.data.map(el => <ProductReview content={el} key={el.id} />)}
      </CommonCard>
    </>}
  </>
}