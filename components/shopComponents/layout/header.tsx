import React, { FC, useEffect } from 'react'
import { AppBar, Container, Toolbar, Box, Menu, Typography, IconButton, MenuItem, Button, Tooltip, Avatar } from '@mui/material'
import { MenuSVG } from '../../svgIcons/menu'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { useRouter } from 'next/router'
import { authThunks } from '../../../app/store/reducers/auth/authThunks'

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

  const pages = ['Магазин', 'Цены', 'Блог']
  const accountMenu = userData?.role === 'admin'
    ? [{ title: 'Админка', handler: () => router.push('/shop/admin') },
    { title: 'Аккаунт', handler: () => router.push('/shop/profile') },
    { title: 'Корзина', handler: () => router.push('/shop/basket') },
    { title: 'Выйти', handler: () => dispatch(authThunks.getLogout()) }]
    : [{ title: 'Аккаунт', handler: () => router.push('/shop/profile') },
    { title: 'Корзина', handler: () => router.push('/shop/basket') },
    { title: 'Выйти', handler: () => dispatch(authThunks.getLogout()) }]

  const onNavigationClick = (page: string) => {
    console.log(page)
    setMenuAnchor(null)
  }
  const onSettingsClick = (handler: Function) => {
    setAccountMenuAnchor(null)
    handler()
  }

  return <>
    <AppBar position='static' >
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Mobile Menu */}
          <Box sx={{ display: { md: 'none', xs: 'flex' } }}>
            <IconButton
              size="large"
              onClick={(event) => setMenuAnchor(event.currentTarget)}
            >
              <MenuSVG className='fill-white w-8 h-8' />
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => onNavigationClick(page)}>
                  <Typography sx={{ paddingRight: '1rem' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Desktop Menu */}
          <Box sx={{ display: { md: 'flex', xs: 'none' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => console.log(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
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
          :<Button variant='outlined' onClick={() => router.push('/shop/login')}>Войти</Button>}
        </Toolbar>
      </Container>
    </AppBar>
  </>
}