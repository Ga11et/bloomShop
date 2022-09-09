import { Avatar, Container, Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { ProfileThunks } from '../../../app/store/reducers/profile/profileThunks'
import { Layout } from '../../../components/shopComponents/layout/layout'

type ProfilePagePropsType = {
  
}
const ProfilePage: FC<ProfilePagePropsType> = ({  }) => {

  const dispatch = useAppDispatch()
  const { profileData, isLoaded } = useAppSelector(store => store.ProfileReducer)

  useEffect(() => {
    console.log(profileData)
  }, [profileData])

  useEffect(() => {
    dispatch(ProfileThunks.getData())
  }, [])

  return <>
    <Layout>
      <Paper component='main' square sx={{
        padding: '20px 0',
        backgroundColor: (t) => t.palette.grey[800]
      }}>
        <Container maxWidth='xl'>
          <Grid component={Paper} p={3} container sx={{
            backgroundColor: (t) => t.palette.grey[900]
          }}>
            <Grid item lg={2} md={3} sm={4} xs={6} >
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
            <Grid item lg={10} md={9} sm={8} xs={6}>
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