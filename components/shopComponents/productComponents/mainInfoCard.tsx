import { Favorite } from '@mui/icons-material'
import { Box, Button, Card, Grid, Paper, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { IProductR } from '../../../app/types/serverApiTypes'
import { ProductImages } from './productImages'
import { ProductRating } from './productRating'

type ProductInfoCardPropsType = {
  content: IProductR
}
export const ProductInfoCard: FC<ProductInfoCardPropsType> = ({ content }) => {
  
  return <>
    <Card elevation={5} sx={{
          padding: '20px'
        }}>
          <Grid container>
            <Grid item xs={12} md={5} lg={6}>
              <Box>
                <ProductImages content={content.image} />
              </Box>
              <Typography variant='body1' pt={3} component='p'>
                Код товара: {content.code}
              </Typography>
            </Grid>
            <Grid item xs={0} md={7} lg={6}>
              <Typography variant='h5' pb={3} component='h2' color={(t) => t.palette.text.primary}>
                {content.name}
              </Typography>
              <Typography variant='body1' pb={3} component='p' color={(t) => t.palette.text.primary}>
                {content.description}
              </Typography>
              <ProductRating amount={content.amount} value={4} />
              <Paper elevation={5} sx={{
                marginTop: '30px',
                padding: '10px',
                display: 'grid',
                gridTemplateColumns: '2fr 1fr'
              }}>
                <Typography variant='h4' component='h3' color={(t) => t.palette.text.primary} fontWeight={500} >
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
                <Typography pt={2} variant='body2' component='p' color={(t) => t.palette.text.primary}>
                  В наличии: <Typography variant='body2' display='inline-block' component='span' color={(t) => t.palette.secondary.contrastText}>{content.amount}</Typography> шт.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Card>
  </>
}