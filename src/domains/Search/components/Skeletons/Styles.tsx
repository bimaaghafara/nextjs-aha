import { SxObject } from 'src/types/SxObject';
import { IS_DESKTOP } from 'src/constants/Styles';

export const Styles = SxObject({
  skeletonsContainer: {
    marginTop: '-31px'
  },
  skeletonImg: {
    background: '#333',
    height: 0,
    marginTop: '15px',
    paddingTop: 'calc(100% * 222.67 / 335)',
    transform: 'none',
    [IS_DESKTOP]: {
      paddingTop: 'calc(100% * 146 / 219)'
    }
  },
  skeletonTitle: {
    background: '#333',
    height: '12px',
    transform: 'none',
    marginTop: '6.5px',
    marginBottom: '3.5px',
    width: '60%'
  },
  skeletonText: {
    background: '#333',
    height: '10px',
    transform: 'none',
    marginTop: '5px',
    marginBottom: '2px',
    width: '45%'
  }
});
