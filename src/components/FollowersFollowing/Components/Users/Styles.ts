import { SxObject } from 'src/types/SxObject';

export const Styles = SxObject({
  root: {
    width: '100%',
    padding: 0
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: '16px',
    color: '#fff'
  },
  avatar: {
    border: '1px solid #F8F8F8',
    borderRadius: '5px'
  },
  avatarImage: (url) => ({
    background: `url(${url}) no-repeat center center`,
    backgroundSize: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%'
  }),
  text: {
    margin: 0,
    '& > *': {
      color: '#fff !important',
      whiteSpace: 'nowrap',
      maxWidth: '75%',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    '& .MuiListItemText-primary': {
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.15px'
    },
    '& .MuiListItemText-secondary': {
      opacity: '50%',
      fontSize: '14px',
      lineHeight: '21px',
      letterSpacing: '0.25px'
    }
  },
  rightButton: {
    padding: '7px 9px',
    border: '1px solid #fff',
    fontFamily: `'Open Sans', sans-serif !important`,
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '13px',
    borderRadius: '20px',
    textTransform: 'capitalize',
    color: '#fff',
    minWidth: 'unset',
    width: '60px',
    '&:hover': {
      color: '#121212',
      background: '#fff',
      border: '1px solid #fff',
      boxShadow: 'none'
    }
  },
  rightButtonFollowing: {
    width: '76px',
    padding: '7px 7.5px',
    color: '#121212',
    lineHeight: '12px',
    background: '#fff',
    '&:hover': {
      color: '#fff',
      background: '#121212',
      border: '1px solid #fff',
      boxShadow: 'none'
    }
  }
});
