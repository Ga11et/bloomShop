import { Box, Button, Card, Paper, Rating, TextField, Typography } from '@mui/material'
import { FC, FormEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { AlertSlice } from '../../../app/store/reducers/alerts/alertsReducer'
import { usePostMutation } from '../../../app/store/reducers/reviews/reviewsQuery'
import { IPostReviewFormData, IPostReviewHelperItem } from '../../../app/types/clientApiTypes'
import { IProductR } from '../../../app/types/serverApiTypes'
import { ProductReviewFormHelper } from './reviewFormHelper'

type AddingReviewFormCardPropsType = {
  content: IProductR
}
export const AddingReviewFormCard: FC<AddingReviewFormCardPropsType> = ({ content }) => {

  const [postReview, result] = usePostMutation()
  const dispatch = useAppDispatch()
  const { isAuth } = useAppSelector(store => store.AuthReducer)
  const [formData, setFormData] = useState<IPostReviewFormData>({ comment: '', negative: '', positive: '', rating: 0 })

  useEffect(() => {
    if (result.status === 'fulfilled') {
      if (result.data.data?.isSuccess) dispatch(AlertSlice.actions.addAlert({ id: String(Date.now()), title: 'Обзор успешно добавлен', type: 'success' }))
    }
  }, [result])

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const positive = data.get('positive') as string || ''
    const negative = data.get('negative') as string || ''
    const comment = data.get('comment') as string
    const rating = data.get('rating') as number | null
    if (rating && comment) postReview({ rating, positive, negative, comment, productId: content.id, productName: content.name })
  }

  const reviewItems: IPostReviewHelperItem[] = [
    { title: 'Войдите *', success: isAuth },
    { title: 'Поставьте оценку *', success: Boolean(formData.rating) },
    { title: 'Добавьте комментарий *', success: Boolean(formData.comment) },
    { title: 'Опишите положительное', success: Boolean(formData.positive) },
    { title: 'Опишите отрицательное', success: Boolean(formData.negative) }
  ]

  return <>
    <Card elevation={5} sx={{
      padding: '20px',
      display: 'grid',
      gridTemplateColumns: '60% 1fr'
    }}>
      <Box component='form' onSubmit={submitHandler}>
        
        <Typography component='h3' variant='h6' pb={2}>
          Опыт покупателя
        </Typography>
        <TextField onChange={(event) => setFormData((prev) => ({ ...prev, positive: event.target.value }))} name='positive' multiline fullWidth label='Положительное' margin='dense' />
        <TextField onChange={(event) => setFormData((prev) => ({ ...prev, negative: event.target.value }))} name='negative' multiline fullWidth label='Отрицательное' margin='dense' />
        <TextField onChange={(event) => setFormData((prev) => ({ ...prev, comment: event.target.value }))} name='comment' multiline required fullWidth label='Комментарий' margin='dense' />
        <Paper elevation={2} sx={{
          padding: '10px',
          width: 'min-content',
          minWidth: '250px',
          marginTop: '10px'
        }}>
          <Typography component='h3' variant='h6' pb={1}>
            Общая оценка *
          </Typography>
          <Rating onChange={(event) => {
            const target = event.target as EventTarget & { value: number }
            setFormData((prev) => ({ ...prev, rating: prev.rating === target.value ? 0 : target.value }))
          }} name='rating' size='large' />
        </Paper>
        <Button size='large' variant='contained' type='submit' sx={{
          marginTop: '20px'
        }}>Отправить</Button>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <ProductReviewFormHelper items={reviewItems} />
      </Box>
    </Card>
  </>
}