import { Box, IconButton } from '@mui/material'
import { FC, useState } from 'react'
import { IProductImage } from '../../../app/types/clientApiTypes'

type ProductImagesPropsType = {
  content: IProductImage[]
}
export const ProductImages: FC<ProductImagesPropsType> = ({ content }) => {

  const [activeIndex, setActiveIndex] = useState(0)

  return <>
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: '80px 1fr'
    }}>
      <Box sx={{
        overflowY: 'auto',
        height: '500px',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
        {content.map((image, index) => (
          <IconButton key={image.id} onClick={() => setActiveIndex(index)} sx={{
            width: '70px',
            height: '70px',
            borderRadius: '9px'
          }}>
            <img src={image.small} alt='product' style={{
              width: '100%',
              height: '100%',
              borderRadius: '9px',
              display: 'block',
              objectFit: 'cover'
            }} />
          </IconButton>
        ))}
      </Box>
      <Box>
        <img style={{
          display: 'block',
          width: '100%',
          height: '500px',
          objectFit: 'cover',
          paddingRight: '20px'
        }} src={content[activeIndex] ? content[activeIndex].url : 'https://via.placeholder.com/500'} />
      </Box>
    </Box>
  </>
}