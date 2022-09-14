import { Favorite } from '@mui/icons-material'
import { Box, Button, Card, CardMedia, Grid, Rating, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { IProductR } from '../../../app/types/serverApiTypes'

type ProductPlatePropsType = {
  content: IProductR
}
export const ProductPlate: FC<ProductPlatePropsType> = ({ content }) => {

  const router = useRouter()

  return <>
    <Card elevation={5} >
      <Grid container p={1} sx={{
        display: 'grid',
        gridTemplateColumns: 'min-content 1fr 200px'
      }}>
        <Box>
          <CardMedia sx={{
            width: '200px',
            height: '200px'
          }} >
            <img src={content.image[0] ? content.image[0] : 'https://via.placeholder.com/150'} style={{
              width: '100%',
              height: '100%',
              display: 'block'
            }} />
          </CardMedia>
        </Box>
        <Box p={2} sx={{
          display: 'grid',
          gridTemplateRows: '1fr min-content min-content',
          height: '100%'
        }}>
          <Typography variant='h6' component='h3'>
            {content.name}
          </Typography>
          <Box>
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
          <Box>
            <Typography pt={2} variant='body2' component='p'>
              В наличии: <Typography variant='body2' display='inline-block' component='span' color='primary'>{content.amount}</Typography> шт.
            </Typography>
          </Box>
        </Box>
        <Box p={2} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end'
        }}>
          <Typography variant='h4' component='h3' pb={4} color='secondary' fontWeight={500} >
            {content.price}₽
          </Typography>
          <Box sx={{
              display: 'grid',
              columnGap: '10px',
              gridTemplateColumns: 'min-content 1fr'
          }}>
            <Button size='large' variant='outlined' sx={{
              minWidth: 'unset',
              paddingX: 1
            }}>
              <Favorite color='primary' />
            </Button>
            <Button size='large' variant='contained' color='primary'>Купить</Button>
          </Box>
          <Button size='large' variant='contained' fullWidth color='success'
            onClick={() => router.push(`/shop/product/${content.id}`)} sx={{
              marginTop: 'auto'
            }}
          >Подробнее</Button>
        </Box>
      </Grid>
    </Card>
  </>
}