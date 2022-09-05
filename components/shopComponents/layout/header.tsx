import React, { FC } from 'react'
import { AppBar, Container, Toolbar, Box, Menu, Typography, IconButton, MenuItem, Button, Tooltip, Avatar } from '@mui/material'
import { MenuSVG } from '../../svgIcons/menu'

type HeaderPropsType = {
  
}
export const Header: FC<HeaderPropsType> = ({  }) => {

  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null)
  const [accountMenuAnchor, setAccountMenuAnchor] = React.useState<null | HTMLElement>(null)
  const pages = ['Магазин', 'Цены', 'Блог']
  const accountMenu = ['Аккаунт', 'Корзина', 'Выйти']

  const onNavigationClick = (page: string) => {
    console.log(page)
    setMenuAnchor(null)
  }
  const onSettingsClick = (setting: string) => {
    console.log(setting)
    setAccountMenuAnchor(null)
  }

  return <>
    <AppBar position='static'>
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
          <Box>
            <Tooltip title='Открыть настройки'>
              <IconButton onClick={(event) => setAccountMenuAnchor(event.currentTarget)} >
                <Avatar alt='Fyodor' />
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
                <MenuItem key={menu} onClick={() => onSettingsClick(menu)}>
                  <Typography>{menu}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </>
}