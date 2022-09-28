import { Container, Grid, Paper, Typography } from '@mui/material'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { AsideMenu } from '../../../components/shopComponents/layout/asideMenu'
import { Layout } from '../../../components/shopComponents/layout/layout'
import { Settings } from '@mui/icons-material'
import { IAsideMenuItem } from '../../../app/types/layoutComponentsTypres'
import { useRouter } from 'next/router'
import { ProfileInfo } from '../../../components/shopComponents/profileComponents/profileInfo'
import { ProfileForm } from '../../../components/shopComponents/profileComponents/profileForm'
import { WarningZone } from '../../../components/shopComponents/profileComponents/warningZone'
import { useGetProfileInfoQuery } from '../../../app/store/reducers/profile/profileQuery'

type ProfilePagePropsType = {
  
}
const ProfilePage: FC<ProfilePagePropsType> = ({  }) => {

  const router = useRouter()
  const { isAuth } = useAppSelector(store => store.AuthReducer)
  const { data: profileInfo } = useGetProfileInfoQuery(null)

  useEffect(() => {
    if (!isAuth) router.push('/shop')
  }, [isAuth])

  const asideMenuItems: IAsideMenuItem[] = [
    { icon: Settings, title: 'Настройки', handler: () => router.push('/shop/profile') }
  ]

  return <>
    <Layout>
      <Paper component='main' square sx={{
        padding: '20px 0',
        backgroundColor: (t) => t.palette.grey[100]
      }}>
        <Container maxWidth='xl'>
          <Typography variant='h4' pb={5} pt={3} component='h1'>
            Страница аккаунта
          </Typography>
        </Container>
        <Container maxWidth='xl' sx={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gridGap: '20px'
        }}>
          <AsideMenu items={asideMenuItems} />
          <Grid container gap={2} >
            <ProfileInfo content={profileInfo?.data} />
            <ProfileForm content={profileInfo?.data} />
            <WarningZone />
          </Grid>
        </Container>
      </Paper>
    </Layout>
  </>
}

export default ProfilePage