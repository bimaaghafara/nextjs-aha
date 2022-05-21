import { SxObject } from 'src/types/SxObject';
import { IS_DESKTOP } from 'src/constants/Styles';

export const Styles = SxObject({
  root: {
    [IS_DESKTOP]: {
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
    [IS_DESKTOP]: {
      marginTop: '20px'
    }
  },
  topLine: {
    marginTop: '30px',
    marginBottom: '2px',
    opacity: '0.1',
    border: '1px solid #FFFFFF',
    display: 'none',
    [IS_DESKTOP]: {
      display: 'block'
    }
  },
  titleResults: {
    color: '#fff',
    fontSize: '24px',
    marginTop: '28px'
  },
  pageSize: {
    display: 'flex',
    direction: 'row',
    alignItems: 'flex-end',
    marginTop: '16px',
    color: '#fff',
    [IS_DESKTOP]: {
      marginTop: '20px'
    }
  },
  pageSizeValue: {
    fontSize: '48px',
    lineHeight: '50px',
    fontWeight: 700
  },
  pageSizeLabel: {
    fontSize: '16px',
    letterSpacing: '0.15px',
    paddingLeft: '10px',
    paddingBottom: '4px'
  },
  slider: (pageSizeIndex) => ({
    color: 'transparent',
    width: '100%',
    height: '8px',
    paddingTop: '26px !important',
    paddingBottom: '13px !important',
    '& .MuiSlider-mark': {
      display: 'none'
    },
    '& .MuiSlider-rail': {
      background: '#fff',
      opacity: 0.3
    },
    '& .MuiSlider-track': {
      background: 'linear-gradient(to right, #FF5C01 , #FFD25F)',
      border: 'none'
    },
    '& .MuiSlider-thumb': {
      border: '6px solid #FFD05D',
      background: '#1b1b1b',
      boxShadow: 'none',
      height: '26px',
      width: '26px',
      '&:hover': {
        boxShadow: 'none'
      },
      '&:before': {
        boxShadow: 'none'
      },
      ...(pageSizeIndex === 0 && {
        left: '4px !important'
      }),
      ...(pageSizeIndex === 5 && {
        left: 'calc(100% - 8px) !important'
      })
    },
    '& .MuiSlider-markLabel': {
      top: '30px !important',
      opacity: 0.5,
      color: '#fff',
      fontWeight: 500,
      fontSize: '16px',
      letterSpacing: '0.15px',
      lineHeight: '24px',
      marginTop: '8px',
      '&[data-index="0"]': {
        left: '4px !important'
      },
      '&[data-index="5"]': {
        left: 'calc(100% - 8px) !important'
      },
      [`&[data-index="${pageSizeIndex}"]`]: {
        opacity: 1,
        ...(pageSizeIndex === 0 && {
          left: '4px !important'
        }),
        ...(pageSizeIndex === 5 && {
          left: 'calc(100% - 8px) !important'
        })
      }
    }
  }),
  bottomLine: {
    marginTop: '221px',
    marginBottom: '210px',
    opacity: '0.1',
    border: '1px solid #FFFFFF',
    [IS_DESKTOP]: {
      marginTop: '30px',
      marginBottom: '2px'
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
    [IS_DESKTOP]: {
      width: '343px',
      bottom: 0,
      marginBottom: '87px'
    }
  }
});
