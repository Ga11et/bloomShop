import { Box, IconButton } from '@mui/material'
import { FC, useState } from 'react'

type ProductImagesPropsType = {
  content: string[]
}
export const ProductImages: FC<ProductImagesPropsType> = ({ content }) => {

  const [activeIndex, setActiveIndex] = useState(0)

  return <>
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: '80px 1fr'
    }}>
      <Box>
        <IconButton onClick={() => setActiveIndex(1)} sx={{
          width: '70px',
          height: '70px',
          borderRadius: '9px'
        }}>
          1
        </IconButton>
        <IconButton onClick={() => setActiveIndex(2)} sx={{
          width: '70px',
          height: '70px',
          borderRadius: '9px'
        }}>
          2
        </IconButton>
        <IconButton onClick={() => setActiveIndex(3)} sx={{
          width: '70px',
          height: '70px',
          borderRadius: '9px'
        }}>
          3
        </IconButton>
      </Box>
      <Box>
        <img style={{
          display: 'block',
          width: '100%',
          height: '500px',
          objectFit: 'cover',
          paddingRight: '20px'
        }} src={content[activeIndex] ? content[activeIndex] : 'https://via.placeholder.com/500'} />
      </Box>
    </Box>
  </>
}