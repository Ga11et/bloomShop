import { Star } from '@mui/icons-material'
import { Box, Button, Rating, Typography } from '@mui/material'
import { FC } from 'react'

type ProductRatingPropsType = {
  value: number
  amount: number
}
export const ProductRating: FC<ProductRatingPropsType> = ({ amount, value }) => {
  return <>
    <Box>
      <Button variant='outlined' color='secondary' sx={{
        padding: '5px 10px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Rating value={value} readOnly size='small' icon={<Star fontSize="inherit" color='secondary' />} />
        <Typography component='p' pl={1} variant='body2' color={(t) => t.palette.secondary.contrastText}>
          {amount}
        </Typography>
      </Button>
    </Box>
  </>
}