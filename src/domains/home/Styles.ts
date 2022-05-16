import { SxObject } from 'src/types/SxObject';

export const Styles = SxObject({
  root: {
    '@media screen and (min-width: 601px)': {
      marginTop: '54px'
    }
  },
  title: {
    color: '#fff',
    fontSize: '24px'
  },
  textfieldKeyword: {
    marginTop: '16px',
    '& input': {
      color: '#fff'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '3px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '6px'
      },
      '&:hover fieldset': {
        border: '3px solid #FF9B33'
      },
      '&.Mui-focused fieldset': {
        border: '3px solid #FF9B33'
      }
    }
  }
});
