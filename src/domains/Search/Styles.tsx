import { SxObject } from 'src/types/SxObject';
import { IS_DESKTOP } from 'src/constants/Styles';

export const Styles = SxObject({
  root: {
    color: '#fff'
  },
  topSection: {
    marginTop: '20px',
    marginBottom: '24px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    [IS_DESKTOP]: {
      paddingLeft: '20px',
      marginTop: '92px'
    }
  },
  backToHome: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    cursor: 'pointer',
    '& svg': {
      fontSize: '45px',
      marginLeft: '-16px',
      display: 'none',
      [IS_DESKTOP]: {
        display: 'block'
      }
    },
    '& p': {
      fontSize: '24px',
      letterSpacing: '0.25px',
      [IS_DESKTOP]: {
        fontSize: '30px',
        paddingLeft: '9px'
      }
    },
    [IS_DESKTOP]: {
      marginLeft: '-50px'
    }
  },
  buttonMore: {
    width: '100%',
    height: '40px',
    boxShadow: 'none',
    backgroundColor: '#fff',
    fontWeight: 700,
    border: '1px solid #121212',
    color: '#121212',
    marginTop: '39px',
    marginBottom: '24px',
    '&:hover': {
      color: '#fff !important',
      backgroundColor: '#121212 !important',
      border: '1px solid #fff',
      boxShadow: 'none'
    },
    '&.MuiLoadingButton-loading': {
      color: '#fff !important',
      backgroundColor: '#121212 !important',
      border: '1px solid #fff',
      boxShadow: 'none'
    },
    '&..Mui-disabled': {
      color: '#121212'
    },
    [IS_DESKTOP]: {
      width: '343px'
    }
  }
});
