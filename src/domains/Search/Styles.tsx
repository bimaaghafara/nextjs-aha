import { SxObject } from 'src/types/SxObject';

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
  }
});
