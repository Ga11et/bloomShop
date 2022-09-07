import React, { FC, useEffect } from 'react'
import { AppBar, Container, Toolbar, Box, Menu, Typography, IconButton, MenuItem, Button, Tooltip, Avatar } from '@mui/material'
import { MenuSVG } from '../../svgIcons/menu'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { mainThunks } from '../../../app/store/reducers/thunks'
import Router from 'next/router'

type HeaderPropsType = {
  
}
export const Header: FC<HeaderPropsType> = ({  }) => {

  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null)
  const [accountMenuAnchor, setAccountMenuAnchor] = React.useState<null | HTMLElement>(null)

  const { isAuth, authData } = useAppSelector(store => store.MainReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(mainThunks.getAuth())
  }, [])

  const pages = ['Магазин', 'Цены', 'Блог']
  const accountMenu = authData.role === 'admin'
    ? [{ title: 'Админка', handler: () => Router.push('./admin') },
    { title: 'Аккаунт', handler: () => Router.push('./profile') },
    { title: 'Корзина', handler: () => Router.push('./basket') },
    { title: 'Выйти', handler: () => dispatch(mainThunks.getLogaout()) }]
    : [{ title: 'Аккаунт', handler: () => Router.push('./profile') },
    { title: 'Корзина', handler: () => Router.push('./basket') },
    { title: 'Выйти', handler: () => dispatch(mainThunks.getLogaout()) }]

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
          {isAuth ? <Box>
            <Tooltip title='Открыть настройки'>
              <IconButton onClick={(event) => setAccountMenuAnchor(event.currentTarget)} >
                <Avatar alt={authData.login} src={'tk;ladsf'} />
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
          :<Button variant='outlined' onClick={() => Router.push('./login')}>Войти</Button>}
        </Toolbar>
      </Container>
    </AppBar>
  </>
}