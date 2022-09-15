import { Star } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { IReviewsCounts } from '../../../app/types/clientApiTypes'

type ProductReviewsCountPropsType = {
  counts: IReviewsCounts
}
export const ProductReviewsCount: FC<ProductReviewsCountPropsType> = ({ counts }) => {
  return <>
    <Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '10px'
      }}>
        <ReviewCount count={counts.five} all={counts.all} />
        <ReviewCount count={counts.four} all={counts.all} />
        <ReviewCount count={counts.three} all={counts.all} />
        <ReviewCount count={counts.two} all={counts.all} />
        <ReviewCount count={counts.one} all={counts.all} />
      </Box>

    </Box>
  </>
}


type ReviewCountPropsType = {
  count: number
  all: number
}
const ReviewCount: FC<ReviewCountPropsType> = ({ all, count }) => {
  return <>
    <Box>
      <Typography component='p' fontWeight={500} variant='body1' color={count !== 0 ? '#1976d2' : 'grey'}>
        {count} отзывов
      </Typography>
      <Box sx={{
        backgroundColor: (t) => t.palette.grey[300],
        borderRadius: '5px',
        height: '22px',
        maxWidth: '300px'
      }}>
        {count !== 0 && <>
          <Box sx={{
            width: count / all * 100 + '%',
            minWidth: '40px',
            backgroundImage: 'linear-gradient(90deg, #1976d2, #86A8E7)',
            height: '100%',
            borderRadius: '5px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Star color='warning' sx={{
              width: '20px',
              position: 'absolute',
              right: '5px',
            }} />
          </Box>
        </>}
      </Box>
    </Box>
  </>
}