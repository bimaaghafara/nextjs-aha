import { SxObject } from 'src/types/SxObject';
import { IS_DESKTOP } from 'src/constants/Styles';

export const Styles = SxObject({
  root: {
    color: '#fff'
  },
  topSection: {
    marginTop: '20px',
    marginBottom: '24px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    [IS_DESKTOP]: {
      paddingLeft: '20px',
      marginTop: '92px',
      height: '45px'
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
        display: 'block',
        marginLeft: '-23px',
        marginTop: '0.5px'
      }
    },
    '& p': {
      fontSize: '24px',
      letterSpacing: '0.014px',
      [IS_DESKTOP]: {
        fontSize: '30px',
        paddingLeft: '15px',
        letterSpacing: '0.16px',
        marginTop: '0.5px'
      }
    },
    [IS_DESKTOP]: {
      marginLeft: '-50px'
    }
  },
  usersContainer: {
    marginLeft: '-34px',
    width: 'calc(100% + 34px)',
    '& div:nth-child(5)': {
      [IS_DESKTOP]: {
        marginBottom: '17.5px'
      }
    }
  },
  userContainer: {
    paddingLeft: '34px !important'
  },
  userImg: (url) => ({
    height: 0,
    paddingTop: 'calc(100% * 222.67 / 335)',
    background: `url(${url}) no-repeat center center`,
    backgroundColor: '#333',
    backgroundSize: 'cover',
    [IS_DESKTOP]: {
      paddingTop: 'calc(100% * 146 / 219)'
    }
  }),
  userName: {
    fontSize: '14.9px',
    lineHeight: '22px',
    letterSpacing: '0.14px',
    marginTop: '20.33px',
    [IS_DESKTOP]: {
      marginTop: '12px'
    }
  },
  userUsername: {
    color: '#B2B2B2',
    fontSize: '11.17px',
    lineHeight: '150%',
    letterSpacing: '0.37px',
    marginBottom: '40px',
    [IS_DESKTOP]: {
      marginBottom: '32px'
    }
  },
  buttonMore: {
    [IS_DESKTOP]: {
      width: '345px',
      marginTop: '6.5px',
      marginLeft: '-1px',
      paddingLeft: '17px',
      paddingRight: '13px'
    }
  }
});
