import { Box, Typography } from '@mui/material'
import { FC } from 'react'

type ProductCircleRatingPropsType = {
  rating: number
  reviewsCount: number
}
export const ProductCircleRating: FC<ProductCircleRatingPropsType> = ({ rating, reviewsCount }) => {
  return <>
    <Box sx={{
      position: 'relative',
      padding: '0 20px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <svg width={250} height={250}>
        <defs>
          <linearGradient id='productCircleGrad'>
            <stop offset='5%' stopColor='#86A8E7' />
            <stop offset='50%' stopColor='#42a5f5' />
            <stop offset='95%' stopColor='#1976d2' />
          </linearGradient>
        </defs>
        <circle r='120' cx='125' cy='125' strokeWidth='9' stroke='lightgrey' fill='none' />
        <circle r='120' cx='125' cy='125' strokeWidth='9' stroke='url(#productCircleGrad)' strokeLinecap='round' transform='rotate(-90 125 125)' strokeDasharray={rating / 5 * 240 * 3.14 + 'px 1000px'} fill='none' />
      </svg>
      <Box sx={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography variant='h2' fontWeight={700} pb={1} color='#1976d2' component='p'>
          {rating}
        </Typography>
        <Typography variant='body1' pb={1} component='p'>
          Общий рейтинг
        </Typography>
        <Typography variant='body1' fontWeight={500} color='#1976d2' component='p'>
          {reviewsCount} отзывов
        </Typography>
      </Box>
    </Box>
  </>
}