import React from 'react';
import { useRouter } from 'next/router';
import { Styles as sx } from './Styles';

// components
import MenuIcon from 'public/img/fa-solid_pencil-ruler.svg';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

type PageLayoutProps = {
  children: React.ReactNode;
  activeMenu: string;
  withNotificationMenus?: [string?];
};

type Menu = {
  key: string;
  label: string;
  url: string;
};

export default function PageLayout({
  children,
  activeMenu,
  withNotificationMenus = []
}: PageLayoutProps) {
  const router = useRouter();
  const getMenuCLassName = (menu: string) => {
    const activeClass = activeMenu === menu ? 'menuIcon-active' : '';
    const withNotificationClass = withNotificationMenus.includes(menu) ? 'with-notification' : '';
    return [activeClass, withNotificationClass].join(' ');
  };

  const menus: Menu[] = [
    { key: 'home', label: 'Home', url: '/' },
    { key: 'tags', label: 'Tags', url: 'tags' }
  ];

  return (
    <Box sx={sx.root}>
      <Drawer sx={sx.drawer} variant="permanent" anchor="left">
        <List sx={sx.list}>
          <ListItem disablePadding sx={sx.logo}>
            <Typography>LOGO</Typography>
          </ListItem>
          {menus.map((menu: Menu) => (
            <ListItem key={menu.key} disablePadding>
              <ListItemButton
                sx={sx.listItemButton}
                className={getMenuCLassName(menu.key)}
                onClick={() => router.push(menu.url)}
              >
                <ListItemIcon sx={sx.listItemIcon}>
                  <Box sx={sx.menuIcon}>
                    <MenuIcon />
                  </Box>
                  <ListItemText primary={menu.label} sx={sx.listItemText} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={sx.content}>{children}</Box>
    </Box>
  );
}
