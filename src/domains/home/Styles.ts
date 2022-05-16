import { SxObject } from 'src/types/SxObject';

const isDesktop = `@media screen and (min-width: 601px)`;

export const Styles = SxObject({
  root: {
    [isDesktop]: {
      marginTop: '54px'
    }
  },
  titleSearch: {
    color: '#fff',
    fontSize: '24px'
  },
  textfieldKeyword: {
    marginTop: '16px',
    '& input': {
      color: '#fff',
      height: '27px'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '3px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '6px'
      },
      '&:hover fieldset': {
        border: '3px solid rgba(255, 255, 255, 0.5)'
      },
      '&.Mui-focused fieldset': {
        border: '3px solid #FF9B33'
      }
    },
    [isDesktop]: {
      marginTop: '20px'
    }
  },
  line: {
    display: 'none',
    [isDesktop]: {
      display: 'block',
      opacity: '0.1',
      border: '1px solid #FFFFFF',
      marginTop: '30px',
      marginBottom: '2px'
    }
  },
  titleResults: {
    color: '#fff',
    fontSize: '24px',
    marginTop: '28px'
  },
  perPage: {
    display: 'flex',
    direction: 'row',
    alignItems: 'flex-end',
    marginTop: '16px',
    color: '#fff',
    [isDesktop]: {
      marginTop: '20px'
    }
  },
  perPageValue: {
    fontSize: '48px',
    lineHeight: '50px',
    fontWeight: 700
  },
  perPageResults: {
    fontSize: '16px',
    letterSpacing: '0.15px',
    paddingLeft: '10px',
    paddingBottom: '4px'
  },
  slider: {
    color: 'transparent',
    width: '100%',
    '& .MuiSlider-track': {
      background: 'linear-gradient(to right, red , yellow)'
    }
  },
  buttonSearch: {
    width: 'calc(100% - 40px)',
    height: '40px',
    boxShadow: 'none',
    backgroundColor: '#fff',
    fontWeight: 700,
    border: '1px solid #121212',
    color: '#121212',
    position: 'fixed',
    bottom: '66px',
    marginBottom: '24px',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#121212',
      border: '1px solid #fff',
      boxShadow: 'none'
    },
    [isDesktop]: {
      width: '343px',
      bottom: 0,
      marginBottom: '87px'
    }
  }
});
