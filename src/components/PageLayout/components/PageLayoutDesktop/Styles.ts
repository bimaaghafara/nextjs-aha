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
    marginBottom: '14px',
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
      marginRight: '-27.5px',
      content: '""'
    }
  },
  listItemIcon: {
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
    marginLeft: '2.5px'
  },
  menuIcon: {
    height: '24px'
  },
  listItemText: {
    margin: 0,
    '& span': {
      fontSize: '12px',
      lineHeight: '150%',
      letterSpacing: '0.355px',
      paddingLeft: '0.5px'
    }
  },
  contentRoot: {
    display: 'flex',
    flexGrow: 1
  },
  contentWrapper: {
    display: 'flex',
    flexBasis: `${(100 * 985) / (985 + 375)}%`
  },
  sideContentWrapper: {
    display: 'flex',
    maxWidth: `${(100 * 375) / (985 + 375)}%`,
    flexBasis: `${(100 * 375) / (985 + 375)}%`,
    background: '#1b1b1b'
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
  },
  sideContent: {
    width: '100%'
  }
});
