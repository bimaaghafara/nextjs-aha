import { SxObject } from 'src/types/SxObject';

const isDesktop = `@media screen and (min-width: 601px)`;

export const Styles = SxObject({
  topSection: {
    marginTop: '92px',
    height: '45px',
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
      fontSize: '45px',
      marginLeft: '-9px'
    },
    '& p': {
      fontSize: '30px',
      letterSpacing: '0.25px'
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
