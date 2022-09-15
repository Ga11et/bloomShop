import { Favorite } from '@mui/icons-material'
import { Box, Button, Card, Grid, Paper, Rating, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { IProductR } from '../../../app/types/serverApiTypes'

type ProductInfoCardPropsType = {
  content: IProductR
}
export const ProductInfoCard: FC<ProductInfoCardPropsType> = ({ content }) => {
  
  const [activeIndex, setActiveIndex] = useState(0)
  
  return <>
    <Card elevation={5} sx={{
          padding: '20px'
        }}>
          <Grid container>
            <Grid item xs={12} md={5} lg={6}>
              <Box>
                <img style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  paddingRight: '20px'
                }} src={content.image[activeIndex] ? content.image[activeIndex] : 'https://via.placeholder.com/500'} />
              </Box>
              <Typography variant='body1' pt={3} component='p'>
                Код товара: {content.code}
              </Typography>
            </Grid>
            <Grid item xs={0} md={7} lg={6}>
              <Typography variant='h5' pb={3} component='h2'>
                {content.name}
              </Typography>
              <Typography variant='body1' pb={3} component='p'>
                {content.description}
              </Typography>
              <Box pb={3}>
                <Button variant='outlined' color='secondary' sx={{
                  padding: '5px 10px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Rating value={3} readOnly size='small' />
                  <Typography component='p' pl={1} variant='body2' color='GrayText'>
                    {content.amount}
                  </Typography>
                </Button>
              </Box>
              <Paper elevation={5} sx={{
                padding: '10px',
                display: 'grid',
                gridTemplateColumns: '2fr 1fr'
              }}>
                <Typography variant='h4' component='h3' color='secondary' fontWeight={500} >
                  {content.price}₽
                </Typography>
                <Box sx={{
                  display: 'grid',
                  columnGap: '10px',
                  gridTemplateColumns: 'min-content 1fr',
                  height: 'min-content'
                }}>
                  <Button size='large' variant='outlined' sx={{
                    minWidth: 'unset',
                    paddingX: 1
                  }}>
                    <Favorite color='primary' />
                  </Button>
                  <Button size='large' variant='contained' color='primary'>Купить</Button>
                </Box>
                <Typography pt={2} variant='body2' component='p'>
                  В наличии: <Typography variant='body2' display='inline-block' component='span' color='primary'>{content.amount}</Typography> шт.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Card>
  </>
}