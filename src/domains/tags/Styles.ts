import { SxObject } from 'src/types/SxObject';
import { IS_DESKTOP } from 'src/constants/Styles';

export const Styles = SxObject({
  root: {
    color: '#fff'
  },
  topSection: {
    marginTop: '20px',
    marginBottom: '24px',
    '& > *': {
      lineHeight: '150%',
      fontSize: '24px',
      letterSpacing: '0.25px'
    },
    [IS_DESKTOP]: {
      marginTop: '80px',
      '& > *': {
        fontSize: '30px'
      }
    }
  }
});
