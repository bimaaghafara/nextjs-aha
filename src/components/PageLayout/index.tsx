import React from 'react';
// import Image from 'next/image';
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
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Box sx={sx.root}>
      <Drawer sx={sx.drawer} variant="permanent" anchor="left">
        <List sx={sx.list}>
          <ListItem disablePadding sx={sx.logo}>
            <Typography>LOGO</Typography>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={sx.listItemButton}>
              <ListItemIcon sx={sx.listItemIcon}>
                <Box sx={sx.menuIcon} className="menuIcon-active">
                  <MenuIcon />
                </Box>
                <ListItemText primary="Home" sx={sx.listItemText} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={sx.listItemButton}>
              <ListItemIcon sx={sx.listItemIcon}>
                <Box sx={sx.menuIcon}>
                  <MenuIcon />
                </Box>
                <ListItemText primary="Tags" sx={sx.listItemText} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box sx={sx.content}>{children}</Box>
    </Box>
  );
}
