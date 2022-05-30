import { SxObject } from 'src/types/SxObject';

export const Styles = SxObject({
  root: {
    width: '100%'
  },
  tabs: {
    marginTop: '17px',
    marginBottom: '32px',
    '& .MuiTab-root': {
      color: '#929292',
      borderBottom: '2px solid #1f1f1f',
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
      letterSpacing: '0.15px',
      paddingTop: '17px',
      paddingBottom: '9px'
    },
    '& .MuiTab-root.Mui-selected': {
      fontWeight: 700,
      color: '#fff'
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#fff'
    }
  }
});
