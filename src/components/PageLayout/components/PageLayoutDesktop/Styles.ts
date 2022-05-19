import { SxObject } from 'src/types/SxObject';

const drawerWidth = 80;

export const Styles = SxObject({
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      backgroundColor: '#1b1b1b',
      color: 'fff',
      width: drawerWidth,
      boxSizing: 'border-box'
    }
  },
  list: {
    padding: 0
  },
  logoWrapper: {
    justifyContent: 'center',
    '& p': {
      marginTop: '37px',
      marginBottom: '43px'
    }
  },
  listItemButton: {
    justifyContent: 'center',
    paddingTop: 0,
    marginBottom: '42px',
    '& svg path': {
      fill: '#8A8A8F'
    },
    '&.menuIcon-active svg path': {
      fill: '#FFF'
    },
    '& span': {
      color: 'transparent'
    },
    '&.menuIcon-active span': {
      color: '#FFF'
    },
    '&.with-notification::after': {
      backgroundImage: 'url("/img/ellipse.png")',
      backgroundSize: '7px 7px',
      display: 'inline-block',
      width: '7px',
      height: '7px',
      position: 'absolute',
      top: '-4px',
      marginRight: '-25px',
      content: '""'
    }
  },
  listItemIcon: {
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff'
  },
  menuIcon: {
    height: '24px'
  },
  listItemText: {
    margin: 0,
    '& span': {
      marginTop: '1px',
      fontSize: '12px',
      lineHeight: '150%',
      letterSpacing: '0.4px'
    }
  },
  content: {
    flexGrow: 1,
    background: '#181818',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'auto',
    '& > *': {
      width: `${(100 * 846) / 1360}%`,
      minWidth: '846px'
    }
  },
  contentWithSide: {
    '& > *': {
      width: `${(100 * 725) / 985}%`,
      minWidth: '725px'
    }
  }
});
