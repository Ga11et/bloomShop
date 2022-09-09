import { Container, Grid, Paper } from '@mui/material'
import { FC, useEffect } from 'react'
import { useAppDispatch } from '../../../app/store/hooks'
import { ProfileThunks } from '../../../app/store/reducers/profile/profileThunks'
import { AsideMenu } from '../../../components/shopComponents/layout/asideMenu'
import { Layout } from '../../../components/shopComponents/layout/layout'
import { Settings } from '@mui/icons-material'
import { IAsideMenuItem } from '../../../app/types/layoutComponentsTypres'
import { useRouter } from 'next/router'
import { ProfileInfo } from '../../../components/shopComponents/profileComponents/profileInfo'
import { ProfileForm } from '../../../components/shopComponents/profileComponents/profileForm'

type ProfilePagePropsType = {
  
}
const ProfilePage: FC<ProfilePagePropsType> = ({  }) => {

  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    dispatch(ProfileThunks.getData())
  }, [])

  const asideMenuItems: IAsideMenuItem[] = [
    { icon: Settings, title: 'Настройки', handler: () => router.push('/shop/profile') }
  ]

  return <>
    <Layout>
      <Paper component='main' square sx={{
        padding: '20px 0',
        backgroundColor: (t) => t.palette.grey[800]
      }}>
        <Container maxWidth='xl' sx={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gridGap: '20px'
        }}>
          <AsideMenu items={asideMenuItems} />
          <Grid container gap={2} >
            <ProfileInfo />
            <ProfileForm />
          </Grid>
        </Container>
      </Paper>
    </Layout>
  </>
}

export default ProfilePage