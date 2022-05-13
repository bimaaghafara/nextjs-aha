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
  logo: {
    justifyContent: 'center',
    '& p': {
      marginTop: '37px',
      marginBottom: '43px',
      fontSize: '13px',
      lineHeight: '15px',
      fontWeight: 700,
      letterSpacing: '-0.05em',
      width: '35px',
      textAlign: 'center',
      background: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
      backgroundClip: 'text',
      color: 'transparent'
    }
  },
  listItemButton: {
    justifyContent: 'center',
    paddingTop: 0,
    marginBottom: '42px'
  },
  listItemIcon: {
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff'
  },
  menuIcon: {
    height: '24px',
    '& svg path': {
      fill: '#8A8A8F'
    },
    '&.menuIcon-active svg path': {
      fill: '#FFF'
    }
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
    p: 3,
    background: '#181818',
    minHeight: '100vh'
  }
});
