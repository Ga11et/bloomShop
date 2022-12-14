import { Container, Paper } from '@mui/material'
import { FC, ReactNode } from 'react'


type BackPaperPropsType = {
  children: ReactNode
}

export const BackPaper: FC<BackPaperPropsType> = ({ children }) => {

  return <>
    <Paper square sx={{
      backgroundColor: (t) => t.palette.background.default,
      paddingY: '50px'
    }}>
      <Container maxWidth='xl'>
        {children}
      </Container>
    </Paper>
  </>
}