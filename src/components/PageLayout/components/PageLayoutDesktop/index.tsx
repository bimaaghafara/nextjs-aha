import { useRouter } from 'next/router';

// styles & components
import { Styles as sx } from './Styles';
import Logo from '../Logo';
import MenuIcon from 'public/img/fa-solid_pencil-ruler.svg';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// types
import { PageLayoutDesktopProps, Menu, Menus } from './types';

export default function PageLayoutDesktop({
  children,
  sideContent,
  activeMenu,
  withNotificationMenus = []
}: PageLayoutDesktopProps) {
  const router = useRouter();

  const getMenuCLassName = (menu: string) => {
    const activeClass = activeMenu === menu ? 'menuIcon-active' : '';
    const withNotificationClass = withNotificationMenus.includes(menu) ? 'with-notification' : '';
    return [activeClass, withNotificationClass].join(' ');
  };

  const menus: Menus = [
    { key: 'home', label: 'Home', url: '/' },
    { key: 'tags', label: 'Tags', url: 'tags' }
  ];

  const renderContent = () => {
    if (sideContent)
      return (
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Box sx={{ display: 'flex', flexBasis: `${(100 * 985) / (985 + 375)}%` }}>
            <Box sx={sx.content}>{children}</Box>
          </Box>
          <Box sx={{ display: 'flex', flexBasis: `${(100 * 375) / (985 + 375)}%` }}>
            <Box sx={{ color: '#fff' }}>{sideContent}</Box>
          </Box>
        </Box>
      );
    return <Box sx={sx.content}>{children}</Box>;
  };

  return (
    <Box sx={sx.root}>
      <Drawer sx={sx.drawer} variant="permanent" anchor="left">
        <List sx={sx.list}>
          <ListItem disablePadding sx={sx.logoWrapper}>
            <Logo />
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
      {renderContent()}
    </Box>
  );
}
