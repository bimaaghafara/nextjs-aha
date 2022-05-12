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
  logo: {
    justifyContent: 'center',
    '& p': {
      marginTop: '24px',
      marginBottom: '44px',
      fontSize: '13px',
      background: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
      backgroundClip: 'text',
      color: 'transparent'
    }
  },
  listItemButton: {
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: '42px'
  },
  listItemIcon: {
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff'
  },
  menuIcon: {
    '& svg path': {
      fill: '#8A8A8F'
    }
  },
  listItemText: {
    margin: 0,
    '& span': {
      fontSize: '12px'
    }
  },
  content: {
    flexGrow: 1,
    p: 3,
    background: '#181818',
    minHeight: '100vh'
  }
});
