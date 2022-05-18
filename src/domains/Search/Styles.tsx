import { SxObject } from 'src/types/SxObject';

const isDesktop = `@media screen and (min-width: 601px)`;

export const Styles = SxObject({
  topSection: {
    marginTop: '20px',
    marginBottom: '24px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    [isDesktop]: {
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
      [isDesktop]: {
        display: 'block'
      }
    },
    '& p': {
      fontSize: '24px',
      letterSpacing: '0.25px',
      [isDesktop]: {
        fontSize: '30px',
        paddingLeft: '9px'
      }
    },
    [isDesktop]: {
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
      color: '#fff',
      backgroundColor: '#121212',
      border: '1px solid #fff',
      boxShadow: 'none'
    },
    [isDesktop]: {
      width: '343px'
    }
  }
});
