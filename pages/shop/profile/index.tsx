import { Avatar, Container, Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { ProfileThunks } from '../../../app/store/reducers/profile/profileThunks'
import { AsideMenu } from '../../../components/shopComponents/layout/asideMenu'
import { Layout } from '../../../components/shopComponents/layout/layout'
import { Settings } from '@mui/icons-material'
import { IAsideMenuItem } from '../../../app/types/layoutComponentsTypres'
import { useRouter } from 'next/router'

type ProfilePagePropsType = {
  
}
const ProfilePage: FC<ProfilePagePropsType> = ({  }) => {

  const dispatch = useAppDispatch()
  const router = useRouter()
  const { profileData, isLoaded } = useAppSelector(store => store.ProfileReducer)

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
          <Grid component={Paper} p={3} container sx={{
            backgroundColor: (t) => t.palette.grey[900]
          }}>
            <Grid item lg={3} md={4} sm={6} xs={7} >
              <Tooltip title='Изменить фото'>
                <IconButton component='label'>
                  <Avatar src={profileData.image} alt={profileData.firstName} sx={{
                    width: '200px',
                    height: '200px'
                  }} />
                  <input type='file' hidden onChange={(event) => console.log(event)} />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item lg={9} md={8} sm={6} xs={5}>
              <Typography variant='h5' component='h2' mb={2}>
                {profileData.firstName} {profileData.secondName}
              </Typography>
              <Typography variant='body1' component='p'>
                Email: {profileData.email}
              </Typography>
              <Typography variant='body1' component='p'>
                Псевдоним: {profileData.login}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Layout>
  </>
}

export default ProfilePage