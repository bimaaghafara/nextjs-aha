import { SxObject } from 'src/types/SxObject';

export const Styles = SxObject({
  root: {
    width: '100%'
  },
  tabs: {
    marginTop: '12px',
    marginBottom: '35px',
    '& .MuiTab-root': {
      color: '#929292',
      borderBottom: '2px solid #1f1f1f',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '150%',
      letterSpacing: '0.15px',
      paddingTop: '12.5px',
      paddingBottom: '6.5px'
    },
    '& .MuiTab-root.Mui-selected': {
      color: '#fff'
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#fff'
    }
  }
});
