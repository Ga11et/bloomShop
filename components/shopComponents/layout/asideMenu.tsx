import { Avatar, Divider, List, ListItemAvatar, ListItemButton, ListItemText, Paper } from '@mui/material'
import { FC, useState } from 'react'
import { IAsideMenuItem } from '../../../app/types/layoutComponentsTypres'

type AsideMenuPropsType = {
  items: IAsideMenuItem[]
}
export const AsideMenu: FC<AsideMenuPropsType> = ({ items }) => {

  const [selectedIndex, setSelectedIndex] = useState(0)

  const onListItemClick = (index: number, handler: Function) => {
    setSelectedIndex(index)
    handler()
  }

  return <>
    <Paper elevation={4} sx={{
      padding: '10px 0',
      height: 'min-content'
    }}>
      <List>
        {items.map((item, index) => (<div key={item.title + index}>
          <ListItemButton  selected={selectedIndex === index}
            onClick={() => onListItemClick(index, item.handler)} sx={{
              padding: '10px'
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <item.icon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.title} />
          </ListItemButton>
          {index !== items.length - 1 && <Divider variant='inset' component='li' />}
        </div>))}
      </List>
    </Paper>
  </>
}