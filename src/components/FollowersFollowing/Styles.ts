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
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '20px',
      letterSpacing: '0.15px',
      paddingTop: '15px',
      paddingBottom: '11px'
    },
    '& .MuiTab-root.Mui-selected': {
      color: '#fff'
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#fff'
    }
  }
});
