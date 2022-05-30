import { SxObject } from 'src/types/SxObject';

export const Styles = SxObject({
  root: {
    width: '100%',
    height: '40px',
    boxShadow: 'none',
    backgroundColor: '#fff',
    fontWeight: 700,
    border: '1px solid #121212',
    color: '#121212',
    marginTop: '5px',
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
    }
  }
});
