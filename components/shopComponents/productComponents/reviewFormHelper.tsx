import { CheckCircle, Circle } from '@mui/icons-material'
import { Box, Paper, Typography } from '@mui/material'
import { FC } from 'react'
import { IPostReviewHelperItem } from '../../../app/types/clientApiTypes'

type ProductReviewFormHelperPropsType = {
  items: IPostReviewHelperItem[]
}
export const ProductReviewFormHelper: FC<ProductReviewFormHelperPropsType> = ({ items }) => {

  return <>
    <Paper sx={{
      padding: '20px',
      width: 'min-content',
      minWidth: '350px',
      backgroundColor: (t) => t.palette.grey[100]
    }}>
      <Typography pb={2} component='h4' variant='body2' fontWeight={500}>
        Заполните все поля, чтобы ваш отзыв был максимально полезен
      </Typography>
      {items.map((el, index) => <HelperItem key={el.title + index} title={el.title} success={el.success} /> )}
    </Paper>
  </>
}

type HelperItemPropsType = {
  title: string,
  success: boolean
}
const HelperItem: FC<HelperItemPropsType> = ({ title, success }) => {
  return <>
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      paddingY: '10px'
    }}>
      {success ? <CheckCircle sx={{
        marginRight: '10px',
        width: '30px',
        height: '30px'
      }} color='primary' />
      : <Circle sx={{
        marginRight: '10px',
        width: '30px',
        height: '30px'
      }} color='disabled' />}
      <Typography component='p' variant='body2' fontWeight={500} width='fit-content'>
        {title}
      </Typography>
      <Typography component='p' pl={1} variant='body2' color='primary' fontWeight={700}>
        +20%
      </Typography>
    </Box>
  </>
}