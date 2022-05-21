import { SxObject } from 'src/types/SxObject';

export const Styles = SxObject({
  root: {
    background: '#181818',
    minHeight: '100vh'
  },
  topSection: {
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px'
  },
  backToHome: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    cursor: 'pointer',
    '& svg': {
      fontSize: '42px',
      marginLeft: '-9px',
      marginBottom: '-2px'
    },
    '& p': {
      fontSize: '24px',
      letterSpacing: '0.0375px',
      paddingLeft: '5px'
    }
  },
  content: {
    flexGrow: 1,
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingBottom: 0,
    overflow: 'auto'
  },
  bottomNav: {
    height: '66px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    background: 'rgba(24, 24, 24, 0.2)',
    boxShadow: 'inset 0px 0.5px 0px rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(54.3656px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      width: '98px',
      display: 'flex',
      justifyContent: 'space-between'
    },
    '& svg': {
      cursor: 'pointer'
    },
    '& svg path': {
      fill: '#fff'
    },
    '& svg:nth-child(2) path': {
      fill: '#8A8A8F'
    }
  }
});
