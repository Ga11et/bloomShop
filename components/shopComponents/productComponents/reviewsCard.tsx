import { Box, Button, Divider, Typography } from '@mui/material'
import { FC } from 'react'
import { IProductR } from '../../../app/types/serverApiTypes'
import { CommonCard } from '../layout/commonCard'
import { ProductCircleRating } from './circleRating'
import { ProductReviewsCount } from './reviewCounts'

type ProductReviewsCardPropsType = {
  content: IProductR
}
export const ProductReviewsCard: FC<ProductReviewsCardPropsType> = ({ content }) => {
  return <>
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
          <ProductCircleRating rating={4.8} reviewsCount={5} />
          <Button variant='contained' size='large' sx={{
            marginTop: '30px'
          }} >Оставить отзыв</Button>
        </Box>
        <ProductReviewsCount counts={{ one: 2, two: 0, three: 5, four: 2, five: 8, all: 17 }} />
      </Box>
      <Divider sx={{
        marginY: '20px'
      }} />
    </CommonCard>
  </>
}