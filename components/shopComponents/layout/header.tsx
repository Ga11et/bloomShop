import React, { FC, useEffect } from 'react'
import { AppBar, Container, Toolbar, Box, Menu, Typography, IconButton, MenuItem, Button, Tooltip, Avatar, Paper } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { useRouter } from 'next/router'
import { authThunks } from '../../../app/store/reducers/auth/authThunks'
import { MenuSharp } from '@mui/icons-material'

type HeaderPropsType = {
  
}
export const Header: FC<HeaderPropsType> = ({  }) => {

  const router = useRouter()
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null)
  const [accountMenuAnchor, setAccountMenuAnchor] = React.useState<null | HTMLElement>(null)

  const { userData } = useAppSelector(store => store.AuthReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authThunks.getAuth())
  }, [])

  const pages = [
    { title: 'Магазин', handler: () => router.push('/shop') },
    { title: 'Цены', handler: () => router.push('/shop') },
    { title: 'Блог', handler: () => router.push('/shop') }]
  const accountMenu = userData?.role === 'admin'
    ? [{ title: 'Админка', handler: () => router.push('/shop/admin') },
    { title: 'Аккаунт', handler: () => router.push('/shop/profile') },
    { title: 'Корзина', handler: () => router.push('/shop/basket') },
    { title: 'Выйти', handler: () => dispatch(authThunks.getLogout()) }]
    : [{ title: 'Аккаунт', handler: () => router.push('/shop/profile') },
    { title: 'Корзина', handler: () => router.push('/shop/basket') },
    { title: 'Выйти', handler: () => dispatch(authThunks.getLogout()) }]

  const onNavigationClick = (handler: Function) => {
    setMenuAnchor(null)
    handler()
  }
  const onSettingsClick = (handler: Function) => {
    setAccountMenuAnchor(null)
    handler()
  }

  return <>
    <AppBar component={Paper} square elevation={5} sx={{
      backgroundColor: (t) => t.palette.background.paper,
      position: 'sticky'
    }} >
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Mobile Menu */}
          <Box sx={{ display: { md: 'none', xs: 'flex' } }}>
            <IconButton
              size="large"
              onClick={(event) => setMenuAnchor(event.currentTarget)}
            >
              <MenuSharp  />
            </IconButton>
            <Menu
              sx={{ display: { md: 'none', xs: 'flex' } }}
              anchorEl={menuAnchor}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={Boolean(menuAnchor)}
              onClose={() => setMenuAnchor(null)}
            >
              {pages.map((page, index) => (
                <MenuItem key={page.title + index} onClick={() => onNavigationClick(page.handler)}>
                  <Typography sx={{ paddingRight: '1rem' }}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Desktop Menu */}
          <Box sx={{ display: { md: 'flex', xs: 'none' } }}>
            {pages.map((page, index) => (
              <Button
                key={page.title + index}
                onClick={() => page.handler()}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          {/* Accaunt Menu */}
          {userData ? <Box>
            <Tooltip title='Открыть настройки'>
              <IconButton onClick={(event) => setAccountMenuAnchor(event.currentTarget)} >
                <Avatar alt={userData.login} src={'tk;ladsf'} />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={accountMenuAnchor}
              open={Boolean(accountMenuAnchor)}
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'bottom'
              }}
              transformOrigin={{
                horizontal: 'right',
                vertical: 'top'
              }}
              onClose={() => setAccountMenuAnchor(null)}
            >
              {accountMenu.map((menu) => (
                <MenuItem key={menu.title} onClick={() => onSettingsClick(menu.handler)}>
                  <Typography>{menu.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          :<Button color='primary' variant='outlined' onClick={() => router.push('/shop/login')}>Войти</Button>}
        </Toolbar>
      </Container>
    </AppBar>
  </>
}