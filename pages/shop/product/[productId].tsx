import { Box, Typography } from '@mui/material'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { fetchAPI } from '../../../app/api/fetchAPI'
import { useAppSelector } from '../../../app/store/hooks'
import { IProductR } from '../../../app/types/serverApiTypes'
import { DropAlert } from '../../../components/shopComponents/layout/alert'
import { BackPaper } from '../../../components/shopComponents/layout/backPaper'
import { Layout } from '../../../components/shopComponents/layout/layout'
import { ProductChangeForm } from '../../../components/shopComponents/productComponents/changeForm'
import { ProductDeleteForm } from '../../../components/shopComponents/productComponents/deleteCard'
import { ProductInfoCard } from '../../../components/shopComponents/productComponents/mainInfoCard'

type ProductPagePropsType = {
  content?: IProductR
}
const ProductPage: FC<ProductPagePropsType> = ({ content }) => {

  return <>
    <Layout>
      <BackPaper>
        {content ? <>
          <Typography variant='h4' component='h1' pb={5}>
            {content.name}
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '20px'
          }}>
            <ProductInfoCard content={content} />
            <ProductChangeForm content={content} />
            <ProductDeleteForm content={content} />
          </Box>
        </> : <>
          no content
        </>}
      </BackPaper>
    </Layout>
  </>
}

export const getStaticPaths: GetStaticPaths = async () => {

  const responseData = await fetchAPI.productPaths()
  let paths = []
  if (responseData.data) {
    paths = responseData.data.map(product => ({ params: { productId: product } }))
  } else {
    paths = [{ params: { productId: '1' } }]
  }

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{ content?: IProductR }, { productId: string }> = async ({ params }) => {

  const response = await fetchAPI.productById(params ? params.productId : '1')

  return {
    props: { content: response.data }
  }
}

export default ProductPage