import { ThumbDownRounded, ThumbUpRounded } from '@mui/icons-material'
import { Box, Button, Chip, Divider, IconButton, Link, Rating, Typography } from '@mui/material'
import { FC } from 'react'
import { IReviewR } from '../../../app/types/serverApiTypes'

type ProductReviewPropsType = {
  content: IReviewR
}
export const ProductReview: FC<ProductReviewPropsType> = ({ content }) => {
  return <>
    <Box>
      <Divider sx={{
        marginY: '20px'
      }} />
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link variant='h6' >{content.authorName}</Link>
        <Typography component='p' variant='body2'>
          {new Date(content.date).toLocaleDateString()}
        </Typography>
      </Box>
      <Box pt={2}>
        <Button variant='outlined' color='secondary' sx={{
          padding: '5px 10px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Typography component='p' textTransform={'none'} pr={0.5} variant='body2' color='GrayText'>
            Общая
          </Typography>
          <Rating value={content.rating} readOnly size='small' />
        </Button>
      </Box>
      {content.positive && <TextItem text={content.positive} title={'Достоинства'} />}
      {content.negative && <TextItem text={content.negative} title={'Недостатки'} />}
      {content.comment && <TextItem text={content.comment} title={'Комментарий'} />}
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
        <Box>
          <IconButton><ThumbUpRounded color='success' /></IconButton>
          <Chip sx={{
            borderRadius: '9px'
          }} variant='outlined' label={content.likes} color={content.likes >= 0 ? 'success' : 'error'} />
          <IconButton><ThumbDownRounded color='error' /></IconButton>
        </Box>
      </Box>
    </Box>
  </>
}

type TextItemPropsType = {
  title: string
  text: string
}
const TextItem: FC<TextItemPropsType> = ({ text, title }) => {
  return <>
    <Typography pt={2} component='h3' variant='h6'>
      {title}
    </Typography>
    <Typography component='p' variant='body1'>
      {text}
    </Typography>
  </>
}